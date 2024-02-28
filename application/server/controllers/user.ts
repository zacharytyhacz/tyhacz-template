import Express from 'express'
import { handleError } from '../errors/handleError'
import { User } from '../models/User'
import Stytch from '../services/stytch'

export const createUser = async (req: Express.Request, res: Express.Response) => {
    try {
        // Create a new user in Stytch with the provided phone number
        const { stytchUserId, phone } = await Stytch.createUser({
            phone: req.body.phone
        })

        // Create a new user in our database with the returned Stytch user ID and other provided details
        const createdUser = await User.create({
            stytchUserId,
            phone,
            name: req.body.name,
            role: req.body.role
        })

        // Send the created user back to the client with a 201 Created status
        res.json(createdUser).status(201)
    } catch (err) {
        // Handle any errors that occur during the user creation process
        handleError(err, res)
    }
}


export const getUsers = async (req: Express.Request, res: Express.Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const skip = (page - 1) * limit;

        const users = await User.find({}).skip(skip).limit(limit).lean()

        res.json({
            users,
            page,
            limit,
            skip,
            totalPages: Math.ceil(await User.countDocuments() / limit)
        }).status(200)
    } catch (err) {
        handleError(err, res)
    }
}


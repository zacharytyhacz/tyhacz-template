import Express from 'express'
import * as stytch from 'stytch'
import config from '../config'
import { formatPhone } from '../utils/formatPhone'
import { User } from '../models/User'
import APIError from '../errors/apiError'

class StytchApi {
    private client: stytch.Client = null

    constructor () {
        const { NODE_ENV, STYTCH_SECRET, STYTCH_PROJECT_ID } = config()

        this.client = new stytch.Client({
            project_id: STYTCH_PROJECT_ID,
            secret: STYTCH_SECRET,
            env: stytch.envs[NODE_ENV === 'production' ? 'live' : 'test']
        })
    }

    createUser = async (body: { phone: string }) => {
        const phone_number = formatPhone(body.phone)

        const res = await this.client.users.create({
            phone_number
        })

        return {
            stytchUserId: res.user_id,
            phone: phone_number
        }
    }

    startPhoneLogin = async (body: { phone: string }): Promise<string> => {
        const phone_number = formatPhone(body.phone)

        const res = await this.client.otps.sms.send({
            phone_number
        })

        return res.phone_id
    }

    confirmPhoneLogin = async (body: {
        code: string
        methodId: string
    }) => {
        const res = await this.client.otps.authenticate({
            code: body.code,
            method_id: body.methodId,
            session_duration_minutes: 60 * 24 * 7 // week,
        })

        const user = await User.findOne({
            stytchUserId: res.user_id
        })

        if (!user) {
            throw new APIError({
                message: 'Something went wrong validation your login. Please try again later.',
                statusCode: 400
            })
        }

        await User.updateOne({
            stytchUserId: res.user_id
        }, {
            $set: {
                lastLogin: new Date()
            }
        })

        return res.session_jwt
    }

    getSessionFromRequest = async (req: Express.Request) => {
        const authHeader = req.headers.authorization
        const sessionJwt = authHeader.split('Bearer ')[1]

        if (!sessionJwt) {
            return null
        }

        const res = await this.client.sessions.authenticateJwt({
            session_jwt: sessionJwt
        })

        const user = await User.findOne({
            stytchUserId: res.session.user_id
        }).lean()

        return user
    }
}

export default new StytchApi()

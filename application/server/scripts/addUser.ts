import { User } from '../models/User'
import Stytch from '../services/stytch'
import { connectToMongo } from '../database/connect'

export const addUser = async () => {
    await connectToMongo()

    const args: string[] = process.argv.slice(2);
    const phoneNumber = args[0]

    if (!phoneNumber) {
        throw new Error('No phone number given')
    }

    const { stytchUserId, phone } = await Stytch.createUser({ phone: phoneNumber })

    await User.create({
        name: 'Zachary Tyhacz',
        stytchUserId,
        phone
    })

    console.log('User added.')
    process.exit(0)
}
addUser()

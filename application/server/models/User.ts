import mongoose from 'mongoose'

export type UserType = {
    _id?: string
    phone: string
    name: string
    lastLogin?: Date
}

const schema = new mongoose.Schema({
    stytchUserId: { type: String, required: true },
    phone: { type: String, required: true },
    name: { type: String, required: true },
    lastLogin: { type: Date, required: false }
}, {
    timestamps: true,
    versionKey: false
})

export const User = mongoose.model('User', schema)

import mongoose from 'mongoose'
import { Class } from './Class'

export type UserType = {
    _id?: string
    phone: string
    name: string
        lastLogin?: Date
        role: 'instructor' | 'student'
        classes?: mongoose.Schema.Types.ObjectId[]
}

const schema = new mongoose.Schema({
    stytchUserId: { type: String, required: true },
    phone: { type: String, required: true },
    name: { type: String, required: true },
        lastLogin: { type: Date, required: false },
        role: { type: String, required: true, enum: ['instructor', 'student'] },
        classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }]
}, {
    timestamps: true,
    versionKey: false
})

export const User = mongoose.model('User', schema)

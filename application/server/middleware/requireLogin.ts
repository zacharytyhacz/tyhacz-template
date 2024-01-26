import Express from 'express'
import Stytch from '../services/stytch'

export const requireLogin = (): Express.Handler => {
    return async (
        req: Express.Request,
        res: Express.Response,
        next: Express.NextFunction
    ) => {
        const user = await Stytch.getSessionFromRequest(req)

        if (!user) {
            return res.json({
                error: 'You are not authorized to access this data.'
            }).status(403).end()
        }

        next()
    }
}

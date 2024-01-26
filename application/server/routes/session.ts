import { Router } from 'express'
import { validateBody } from '../middleware/validateBody'
import {
    startPhoneLoginValidation,
    confirmPhoneLoginValidation
} from '../validation/session'
import * as controller from '../controllers/session'

const router = Router()

router.get(
    '/session',
    controller.getSession
)

router.post(
    '/session/phone/start',
    validateBody(startPhoneLoginValidation),
    controller.startPhoneLogin
)

router.post(
    '/session/phone/confirm',
    validateBody(confirmPhoneLoginValidation),
    controller.confirmPhoneLogin
)

export default router

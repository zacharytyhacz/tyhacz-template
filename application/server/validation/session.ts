import * as yup from 'yup'
import { phoneRegExp } from './helpers'

export const startPhoneLoginValidation = yup.object({
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid.').required('Phone is required.')
})

export const confirmPhoneLoginValidation = yup.object({
    code: yup.string().required('Confirmaton code is required.'),
    methodId: yup.string().required()
})

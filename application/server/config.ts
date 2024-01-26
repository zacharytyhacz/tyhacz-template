import dotenv from 'dotenv-safe'

export default () => {
    dotenv.config({
        example: './.env.example'
    })

    return {
        NODE_ENV: process.env.NODE_ENV,
        PORT: Number(process.env.PORT),

        // stytch auth api
        STYTCH_PROJECT_ID: process.env.STYTCH_PROJECT_ID,
        STYTCH_SECRET: process.env.STYTCH_SECRET,

        // mongo
        MONGO_URI: process.env.MONGO_URI,

        // upload io
        UPLOADIO_API_KEY: process.env.UPLOADIO_API_KEY,

        // mailgun email sending
        MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
        MAILGUN_FROM_DOMAIN: process.env.MAILGUN_FROM_DOMAIN,
        MAILGUN_FROM_EMAIL: process.env.MAILGUN_FROM_EMAIL,
    }
}

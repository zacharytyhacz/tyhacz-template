import Express from 'express'
import * as path from 'path'
import apiRoutes from './routes'
import { connectToMongo } from './database/connect'
import config from './config'

const startServer = async () => {
    const app = Express()

    const { PORT } = config()

    await connectToMongo()

    app.use('/api', Express.json({ limit: '2mb' }))
    app.use('/api', apiRoutes)

    app.use('/assets', Express.static(path.join(__dirname, '../assets')))
    app.use('/logo', Express.static(path.join(__dirname, '../assets/logo.png')))
    app.use('/', Express.static(path.join(__dirname, '../client-prod')))
    app.use('/*', Express.static(path.join(__dirname, '../client-prod/index.html')))

    app.listen(PORT, () => {
      console.log(`Scourz Application listening on port ${PORT}`)
    })
}

startServer()

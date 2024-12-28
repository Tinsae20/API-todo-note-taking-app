import express, { NextFunction, Request, Response } from 'express'
import http from 'http'

import usersRouter from './routers/users'
import taskRouter from './routers/tasks'
import { loggingHandler } from './middleware/loggingHandler'

export const app = express()

export let httpServer : ReturnType<typeof http.createServer>

export const Main = () => {
    logging.info('---------------------------------------------------------')
    logging.info('Initializing API')
    logging.info('---------------------------------------------------------')
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())

    logging.info('---------------------------------------------------------')
    logging.info('Logging & Configuration')
    logging.info('---------------------------------------------------------')

    app.use(loggingHandler)
}

app.use('/api/users/', usersRouter)
app.use('/api/tasks/', taskRouter)

const PORT = 3000

app.listen(PORT, ()=> {
    console.log(`servier is running on port ${PORT}`)
})
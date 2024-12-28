import express, { NextFunction, Request, Response } from 'express'
import http from 'http'

import usersRouter from './routers/users'
import taskRouter from './routers/tasks'

export const app = express()

export let httpServer : ReturnType<typeof http.createServer>

export const Main = () => {
    logging.info('---------------------------------------------------------')
    logging.info('Initializing API')
    logging.info('---------------------------------------------------------')
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
}

app.use('/api/users/', usersRouter)
app.use('/api/tasks/', taskRouter)

const PORT = 3000

app.listen(PORT, ()=> {
    console.log(`servier is running on port ${PORT}`)
})
import express, { NextFunction, Request, Response } from 'express'
import http from 'http'

import usersRouter from './routers/users'
import taskRouter from './routers/tasks'
import { loggingHandler } from './middleware/loggingHandler'
import { corsHandler } from './middleware/corsHandler'

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
    app.use(corsHandler)

    logging.info('---------------------------------------------------------')
    logging.info('Define Controller Routing')
    logging.info('---------------------------------------------------------')

    // app.get('/main/healthcheck', (req: Request, res: Response, next: NextFunction) => {
    //     return res.status(200).json({hello : "Tinsu!"})
    // })
    
}

app.use('/api/users/', usersRouter)
app.use('/api/tasks/', taskRouter)

const PORT = 3000

app.listen(PORT, ()=> {
    console.log(`servier is running on port ${PORT}`)
})
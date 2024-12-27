import express, { NextFunction, Request, Response } from 'express'

const app = express()
import usersRouter from './routers/users'
import taskRouter from './routers/tasks'

app.use('/api/users/', usersRouter)
app.use('/api/tasks/', taskRouter)

const PORT = 3000

app.listen(PORT, ()=> {
    console.log(`servier is running on port ${PORT}`)
})
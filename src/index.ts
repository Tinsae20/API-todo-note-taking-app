import express, { NextFunction, Request, Response } from 'express'

const app = express()
import usersRouter from './routers/users'

app.use('api/users/', usersRouter)

const PORT = 3000

app.listen(PORT, ()=> {
    console.log(`servier is running on port ${PORT}`)
})
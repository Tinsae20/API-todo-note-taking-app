import http from 'http'
import express from 'express'
import mongoose from 'mongoose'
import dontenv from 'dotenv';
import './config/logging'
import 'reflect-metadata'

import { loggingHandler } from './middleware/loggingHandler'
import { corsHandler } from './middleware/corsHandler'
import { routeNotFound } from './middleware/routeNotFound'
import { SERVER_HOSTNAME, SERVER_PORT }  from './config/config'
import { defineRoutes } from './modules/routes'
import MainController from './controllers/main'
import CategoryController from './controllers/category'
import NoteController from './controllers/note'
import StatusController from './controllers/status'
import ToDoController from './controllers/todo'
import { decalreHandler } from './middleware/declareHandler';

export const app = express()
dontenv.config();

export let httpServer : ReturnType<typeof http.createServer>

const MONGO_USER = process.env.MONGO_USER || ''
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || ''
const MONGO_URL = process.env.MONGO_URL || ''
const MONGO_DATABASE = process.env.MONGO_DATABASE || ''
const MONGO_OPTIONS : mongoose.ConnectOptions = { retryWrites: true, w: "majority" };
const MONGO_CONNECTION = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_URL}/${MONGO_DATABASE}`

export const Main = async() => {
    logging.info('---------------------------------------------------------')
    logging.info('Initializing API')
    logging.info('---------------------------------------------------------')
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())

    logging.info('---------------------------------------------------------')
    logging.info('Connecting to Mongo')
    logging.info('---------------------------------------------------------') 

    try {
        const connection = await mongoose.connect(MONGO_CONNECTION, MONGO_OPTIONS)
        logging.info('---------------------------------------------------------')
        logging.info('Connected to Mongo: ', connection.version)
        logging.info('---------------------------------------------------------') 
    } catch (error) {
        logging.info('---------------------------------------------------------')
        logging.info('Unable to connect to Mongo')
        logging.info('---------------------------------------------------------')  
        logging.error(error) 
        logging.info('---------------------------------------------------------')  
    } 

    logging.info('---------------------------------------------------------')
    logging.info('Logging & Configuration')
    logging.info('---------------------------------------------------------')

    app.use(decalreHandler)
    app.use(loggingHandler)
    app.use(corsHandler)

    logging.info('---------------------------------------------------------')
    logging.info('Define Controller Routing')
    logging.info('---------------------------------------------------------')

    defineRoutes([MainController], app)
    defineRoutes([CategoryController], app)
    defineRoutes([NoteController], app)
    defineRoutes([StatusController], app)
    defineRoutes([ToDoController], app)

    logging.info('---------------------------------------------------------')
    logging.info('Define Routing Error')
    logging.info('---------------------------------------------------------')
    app.use(routeNotFound)

    logging.info('---------------------------------------------------------')
    logging.info('Starting Server')
    logging.info('---------------------------------------------------------')    
    
    httpServer = http.createServer(app)
    httpServer.listen(SERVER_PORT,()=>{
        logging.info('---------------------------------------------------------')
        logging.info(`Server started on ${SERVER_HOSTNAME}:${SERVER_PORT}`)
        logging.info('---------------------------------------------------------')        
    })
}

export const Shutdown = (calback: any)=> httpServer && httpServer.close(calback)

Main();



import { Request, Response, NextFunction } from "express";
import { Controller } from "../decorators/controller";
import { Route } from "../decorators/route";
import { MongoGetAll } from "../decorators/mongoose/getAll";
import { ToDo } from "../models/todo";
import { MongoGet } from "../decorators/mongoose/get";
import { MongoCreate } from "../decorators/mongoose/create";
import { MongoUpdate } from "../decorators/mongoose/update";
import { MongoQuery } from "../decorators/mongoose/query";
import { MongoDelete } from "../decorators/mongoose/delete";

@Controller('/todo')
class ToDoController {

    @Route('get', '/get/all')
    @MongoGetAll(ToDo)
    getAll(req: Request, res: Response, next: NextFunction):any {
        return res.status(200).json(req.mongoGetAll)
    }

    @Route('get', '/get/:id')
    @MongoGet(ToDo)
    getOne(req: Request, res: Response, next: NextFunction):any {
        return res.status(200).json(req.mongoGet)
    }

    @Route('post', '/create')
    @MongoCreate(ToDo)
    create(req: Request, res: Response, next: NextFunction):any {
        return res.status(201).json(req.mongoCreate)
    }

    @Route('patch', '/update/:id')
    @MongoUpdate(ToDo)
    udpate(req: Request, res: Response, next: NextFunction):any {
        return res.status(201).json(req.mongoUpdate)
    }

    @Route('post', '/query')
    @MongoQuery(ToDo)
    query(req: Request, res: Response, next: NextFunction):any {
        return res.status(200).json(req.mongoQuery)
    }

    @Route('delete', '/delete/:id')
    @MongoDelete(ToDo)
    delete(req: Request, res: Response, next: NextFunction):any {
        return res.status(200).json({message: 'Deleted!'})
    } 
}

export default ToDoController
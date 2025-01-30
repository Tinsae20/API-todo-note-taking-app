import { Request, Response, NextFunction } from "express";
import { Controller } from "../decorators/controller";
import { Route } from "../decorators/route";
import { Note } from "../models/note";
import { MongoGetAll } from "../decorators/mongoose/getAll";
import { MongoGet } from "../decorators/mongoose/get";
import { MongoCreate } from "../decorators/mongoose/create";
import { MongoUpdate } from "../decorators/mongoose/update";
import { MongoQuery } from "../decorators/mongoose/query";
import { MongoDelete } from "../decorators/mongoose/delete";

@Controller('/note')
class NoteController {

    @Route('get', '/get/all')
    @MongoGetAll(Note)
    getAll(req: Request, res: Response, next: NextFunction):any {
        return res.status(200).json(req.mongoGetAll)
    }

    @Route('get', '/get/:id')
    @MongoGet(Note)
    getOne(req: Request, res: Response, next: NextFunction):any {
        return res.status(200).json(req.mongoGet)
    }

    @Route('post', '/create')
    @MongoCreate(Note)
    create(req: Request, res: Response, next: NextFunction):any {
        return res.status(201).json(req.mongoCreate)
    }

    @Route('patch', '/update/:id')
    @MongoUpdate(Note)
    udpate(req: Request, res: Response, next: NextFunction):any {
        return res.status(201).json(req.mongoUpdate)
    }

    @Route('post', '/query')
    @MongoQuery(Note)
    query(req: Request, res: Response, next: NextFunction):any {
        return res.status(200).json(req.mongoQuery)
    }

    @Route('delete', '/delete/:id')
    @MongoDelete(Note)
    delete(req: Request, res: Response, next: NextFunction):any {
        return res.status(200).json({message: 'Deleted!'})
    }    
}

export default NoteController
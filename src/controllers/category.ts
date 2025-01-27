import { Request, Response, NextFunction } from "express";
import { Controller } from "../decorators/controller";
import { Route } from "../decorators/route";
import { MongoGetAll } from "../decorators/mongoose/getAll";
import { Category } from "../models/category";
import { MongoGet } from "../decorators/mongoose/get";
import { MongoCreate } from "../decorators/mongoose/create";
import { MongoQuery } from "../decorators/mongoose/query";
import { MongoUpdate } from "../decorators/mongoose/update";
import { MongoDelete } from "../decorators/mongoose/delete";

@Controller('/category')
class CategoryController {

    @Route('get', '/get/all')
    @MongoGetAll(Category)
    getAll(req: Request, res: Response, next: NextFunction):any {
        return res.status(200).json(req.mongoGetAll)
    }

    @Route('get', '/get/:id')
    @MongoGet(Category)
    getOne(req: Request, res: Response, next: NextFunction):any {
        return res.status(200).json(req.mongoGet)
    }

    @Route('post', '/create')
    @MongoCreate(Category)
    create(req: Request, res: Response, next: NextFunction):any {
        return res.status(201).json(req.mongoCreate)
    }

    @Route('patch', '/update/:id')
    @MongoUpdate(Category)
    udpate(req: Request, res: Response, next: NextFunction):any {
        return res.status(201).json(req.mongoUpdate)
    }

    @Route('post', '/query')
    @MongoQuery(Category)
    query(req: Request, res: Response, next: NextFunction):any {
        return res.status(200).json(req.mongoQuery)
    }

    @Route('delete', '/delete/:id')
    @MongoDelete(Category)
    delete(req: Request, res: Response, next: NextFunction):any {
        return res.status(200).json({message: 'Deleted!'})
    }
}

export default CategoryController
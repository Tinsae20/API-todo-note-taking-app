import { Request, Response, NextFunction } from "express";
import { Controller } from "../decorators/controller";
import { Route } from "../decorators/route";

@Controller('/todo')
class ToDoController {

    @Route('get', '/list')
    getToDoList(req: Request, res: Response, next: NextFunction):any {
        return res.status(200).json({message: "Todo List"})
    }

    @Route('post', '/create')
    createToDo(req: Request, res: Response, next: NextFunction):any {
        return res.status(200).json({message: "Create ToDo"})
    }
}

export default ToDoController
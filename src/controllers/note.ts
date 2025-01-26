import { Request, Response, NextFunction } from "express";
import { Controller } from "../decorators/controller";
import { Route } from "../decorators/route";

@Controller('/note')
class NoteController {

    @Route('get', '/list')
    getNoteList(req: Request, res: Response, next: NextFunction):any {
        return res.status(200).json({message: "Note List"})
    }

    @Route('post', '/create')
    createNote(req: Request, res: Response, next: NextFunction):any {
        return res.status(200).json({message: "Create Note"})
    }
}

export default NoteController
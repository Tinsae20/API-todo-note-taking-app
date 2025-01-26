import { Request, Response, NextFunction } from "express";
import { Controller } from "../decorators/controller";
import { Route } from "../decorators/route";

@Controller('/status')
class StatusController {

    @Route('get', '/list')
    getStatusList(req: Request, res: Response, next: NextFunction):any {
        return res.status(200).json({message: "Status List"})
    }

    @Route('post', '/create')
    createStatus(req: Request, res: Response, next: NextFunction):any {
        return res.status(200).json({message: "Create Status"})
    }
}

export default StatusController
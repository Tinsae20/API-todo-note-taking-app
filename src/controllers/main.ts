
import { Request, Response, NextFunction } from "express";
import { Controller } from "../decorators/controller";
import { Route } from "../decorators/route";

@Controller('')
class MainController {

    @Route('get', '/check')
    getCheck(req:Request, res:Response, next:NextFunction):any {
        logging.info('Check called successully')
        return res.status(200).json({hello : "Tinsu!"})
    }

    @Route('post', '/check')
    postCheck(req:Request, res:Response, next:NextFunction):any {
        logging.info('Check called successully')
        return res.status(200).json({...req.body})
    }
}

export default MainController
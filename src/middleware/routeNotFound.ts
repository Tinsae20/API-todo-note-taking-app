
import { Request, Response, NextFunction } from "express";

export function routeNotFound(req:Request, res:Response, next:NextFunction):any {
    const error = new Error("route not found!")
    logging.error(error)
    return res.status(404).json({error: error.message})
}
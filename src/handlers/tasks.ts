import { Request, Response } from "express";

export function getTasks(req:Request, res:Response) {
    res.send([])
}

export function getTaskbyID(req:Request, res:Response) {
    res.send({})
}
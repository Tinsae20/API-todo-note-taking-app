import { Request, Response } from "express";
import { CreateTaskDto } from "../dtos/CreateTask.dto";

export function getTasks(req:Request, res:Response) {
    res.send([])
}

export function getTaskbyID(req:Request, res:Response) {
    res.send({})
}

export function createTask(req:Request<{}, {}, CreateTaskDto>, res:Response) {
    req.body
}
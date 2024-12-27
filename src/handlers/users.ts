import { Request, Response } from "express";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-params";

export function getUsers(req:Request, res:Response) {
    res.send([])
}

export function getUserByID(req:Request, res:Response) {
    res.send({})
}

export function createUser(req:Request<{id:string}, {}, CreateUserDto, 
    CreateUserQueryParams>, res:Response) {
    req.query.loginAfterCreate
}


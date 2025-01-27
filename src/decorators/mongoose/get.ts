
import { Request, Response, NextFunction } from "express";
import { Model } from "mongoose";

export function MongoGet (model: Model<any>){
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value
        descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
            try {
                 const document = await model.findById(req.params.id)
                 if(document){
                    req.mongoGet = document;
                 }else{
                    return res.status(404).json({error: 'Not Found!'})
                 }
                 
            } catch (error) {
                logging.error(error)
                return res.status(500).json(error)
            }

            return originalMethod.call(this, req, res, next)
        }

        return descriptor;
    }
}
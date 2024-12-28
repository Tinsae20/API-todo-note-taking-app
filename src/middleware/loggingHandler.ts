
import { Request, Response, NextFunction } from "express";

export function loggingHandler(req: Request, res: Response, next: NextFunction) {
    logging.log(`Incoming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    req.on('finish', ()=>{
        logging.log(`Incoming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
    })

    next();
}
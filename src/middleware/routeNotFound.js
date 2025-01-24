"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeNotFound = routeNotFound;
function routeNotFound(req, res, next) {
    const error = new Error("route not found!");
    logging.error(error);
    return res.status(404).json({ error: error.message });
}

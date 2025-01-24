"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shutdown = exports.Main = exports.httpServer = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
require("./config/logging");
const loggingHandler_1 = require("./middleware/loggingHandler");
const corsHandler_1 = require("./middleware/corsHandler");
const routeNotFound_1 = require("./middleware/routeNotFound");
const config_1 = require("./config/config");
exports.app = (0, express_1.default)();
const Main = () => {
    logging.info('---------------------------------------------------------');
    logging.info('Initializing API');
    logging.info('---------------------------------------------------------');
    exports.app.use(express_1.default.urlencoded({ extended: true }));
    exports.app.use(express_1.default.json());
    logging.info('---------------------------------------------------------');
    logging.info('Logging & Configuration');
    logging.info('---------------------------------------------------------');
    exports.app.use(loggingHandler_1.loggingHandler);
    exports.app.use(corsHandler_1.corsHandler);
    logging.info('---------------------------------------------------------');
    logging.info('Define Controller Routing');
    logging.info('---------------------------------------------------------');
    exports.app.get('/main/check', (req, res, next) => {
        return res.status(200).json({ hello: "Tinsu!" });
    });
    logging.info('---------------------------------------------------------');
    logging.info('Define Controller Routing');
    logging.info('---------------------------------------------------------');
    exports.app.use(routeNotFound_1.routeNotFound);
    logging.info('---------------------------------------------------------');
    logging.info('Starting Server');
    logging.info('---------------------------------------------------------');
    exports.httpServer = http_1.default.createServer(exports.app);
    exports.httpServer.listen(config_1.SERVER.SERVER_PORT, () => {
        logging.info('---------------------------------------------------------');
        logging.info('Server Started: ' + config_1.SERVER_HOSTNAME + ':' + config_1.SERVER_PORT);
        logging.info('---------------------------------------------------------');
    });
};
exports.Main = Main;
const Shutdown = (calback) => exports.httpServer && exports.httpServer.close(calback);
exports.Shutdown = Shutdown;
(0, exports.Main)();
// app.use('/api/users/', usersRouter)
// app.use('/api/tasks/', taskRouter)
// const PORT = 3000
// app.listen(PORT, ()=> {
//     console.log(`servier is running on port ${PORT}`)
// })

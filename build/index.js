"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const users_1 = __importDefault(require("./routers/users"));
app.use('api/users/', users_1.default);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`servier is running on port ${PORT}`);
});

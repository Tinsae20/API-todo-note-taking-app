"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasks_1 = require("../handlers/tasks");
const router = (0, express_1.Router)();
router.get('/', tasks_1.getTasks);
router.get('/:id', tasks_1.getTaskbyID);
router.post('/', tasks_1.createTask);
exports.default = router;

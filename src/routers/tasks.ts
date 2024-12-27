import { Router } from "express";
import { createTask, getTaskbyID, getTasks } from "../handlers/tasks";

const router = Router()

router.get('/', getTasks)
router.get('/:id', getTaskbyID)

router.post('/', createTask)

export default router

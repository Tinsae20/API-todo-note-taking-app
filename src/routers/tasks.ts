import { Router } from "express";
import { getTaskbyID, getTasks } from "../handlers/tasks";

const router = Router()

router.get('/', getTasks)
router.get('/:id', getTaskbyID)

export default router

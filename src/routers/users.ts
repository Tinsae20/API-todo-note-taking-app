import { Router } from "express";
import { getUsers, getUserByID } from "../handlers/users";

const router = Router()

router.get("/", getUsers)
router.get("/:id", getUserByID)

export default router
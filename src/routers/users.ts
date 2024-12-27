import { Router } from "express";
import { getUsers, getUserByID, createUser } from "../handlers/users";

const router = Router()

router.get("/", getUsers)
router.get("/:id", getUserByID)

router.post("/", createUser)

export default router
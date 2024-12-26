import { Router } from "express";
import { getUsers, getUser } from "../handlers/users";

const router = Router()

router.get("/", getUsers)
router.get("/:id", getUser)

export default router
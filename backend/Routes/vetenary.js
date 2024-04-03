import express from "express";
import { deleteVetenary, getAllVetenary, getSingleVetenary, getVetenaryProfile, updateVetenary } from "../Controllers/vetenaryController.js";
import { authenticate} from "../auth/verifyToken.js";

const router = express.Router();

//nested route

router.get("/:id", getSingleVetenary);
router.get("/", getAllVetenary);
router.put("/:id", authenticate, updateVetenary);
router.delete("/:id", authenticate, deleteVetenary);
router.get("/profile/me", authenticate, getVetenaryProfile);

export default router;
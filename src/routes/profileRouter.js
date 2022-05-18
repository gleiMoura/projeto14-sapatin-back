import { profileProduct, getProfileData } from "../controllers/profileController.js";
import { Router } from "express"

const profileRouter = Router();
profileRouter.post("/profile", profileProduct);
profileRouter.get("/profile", getProfileData);

export default profileRouter;
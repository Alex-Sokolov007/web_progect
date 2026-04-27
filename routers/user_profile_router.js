import { Router } from "express";
import User_profile_controler from '../controllers/user_profile_controler.js'

const user_profile_router = new Router()

user_profile_router.get("/user_profile/:id", User_profile_controler.get1)

export default user_profile_router
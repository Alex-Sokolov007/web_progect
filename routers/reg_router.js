import { Router } from "express";
import Reg_controler from "../controllers/reg_controler.js"

const reg_router = new Router()

reg_router.get("/registration", Reg_controler.get1)


export default reg_router
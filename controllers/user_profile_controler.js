import express from "express"
import { app, PORT } from "../config.js"
import get_all from "../db.js"

class User_profile_controler{
    async get1(req, res){
        const db_data = await get_all("users", req.params.id)
        res.render('user_profile', db_data[0])
    }
}

export default new User_profile_controler
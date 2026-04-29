import express from "express"
import { app, PORT } from "../config.js"
import d_b from "../db.js"

class Reg_controler{
    async get1(req, res){
        res.render("reg")
    }
}

export default new Reg_controler
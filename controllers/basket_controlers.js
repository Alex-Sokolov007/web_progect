import express from "express"
import { app, PORT } from "../config.js"
import get_all from "../db.js"

class Basket_controler{
    async get1(req, res){
        const db_data = await get_all('users', req.params.id)
        console.log(db_data)
        res.render('basket', db_data[0])
    }
}

export default new Basket_controler
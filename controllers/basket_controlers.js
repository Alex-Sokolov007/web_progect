import express from "express"
import { app, PORT } from "../config.js"
import d_b from "../db.js"

class Basket_controler{
    async get1(req, res){
        const db_data = await d_b.getAll('users', req.params.id)
        console.log(db_data)
        res.render('basket', db_data[0])
    }
}

export default new Basket_controler
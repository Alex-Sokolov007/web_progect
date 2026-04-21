import express from "express"
import { app, PORT } from "../config.js"

class Basket_controler{
    async get1(req, res){
        // console.log(`get запрос по id ${req.params.id}`)
        res.render('basket')
    }
}

export default new Basket_controler
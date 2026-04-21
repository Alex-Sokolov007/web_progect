import express from "express"
import { app, PORT } from "../config.js"

class Item_controler{
    async get1(req, res){
        console.log(`get запрос по id ${req.params.id}`)
        res.render('item')
    }
    async post1(req, res){
        console.log("post запрос")
    }
    async get_all(req, res){
        console.log('get all')
    }
}

export default new Item_controler
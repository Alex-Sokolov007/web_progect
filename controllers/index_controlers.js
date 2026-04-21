import express from "express"
import { app, PORT } from "../config.js"
import getAll from "../db.js"

class Index_controler{
    async rendering_page(req, res){
        const data_db = await getAll("products")
        console.log(data_db)
        console.log(data_db.length)
        const data = {
            len: data_db.length,
            name: data_db[0].name,
            prise: data_db[0].prise,
            img: data_db[0].image
        }
        res.render("index", data)

    }
    // async post1(req, res){
    //     console.log("post запрос")
    // }
    // async get_all(req, res){
    //     console.log('get all')
    // }
}

export default new Index_controler
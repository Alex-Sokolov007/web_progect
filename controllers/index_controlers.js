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
            id: [],
            name: [],
            prise: [],
            img: []
        }
        for(let i=0; i<data_db.length; i++){
            data.name.push(data_db[i].name)
            data.prise.push(data_db[i].prise)
            data.img.push(data_db[i].image)
            data.id.push(data_db[i].id)
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
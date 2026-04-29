import express from "express"
import { app, PORT } from "../config.js"
import d_b from "../db.js"
import { match } from "path-to-regexp"


class Index_controler{
    async rendering_page(req, res){
        const data_db = await d_b.getAll("products")
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

    async post1(req, res){
        console.log(req.body.prise)
        if(req.body.name != undefined && req.body.prise != undefined && req.body.img != undefined){
            d_b.add_producte(req.body.name, req.body.prise, req.body.img)
        }else{
            console.log("Данные не коректны")
        }
        res.send("post запрос успешен :)")
    }

    async put(req, res){
        console.log(req.body)
    try{
        switch(req.body.property){
            case "name":
                d_b.update_product_name(req.body.id, req.body.name)
                break
            case "prise":
                console.log("Тут будет изменение по цене")
                break
            default:
                console.log('Ошибка выбора свойства')
                break
        }
        res.send("put запрос успешен")
    }catch (e){
        res.send('Ошибка ввода параметров')
    }
        
    }

}

export default new Index_controler
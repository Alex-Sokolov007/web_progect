import express from "express"
import { app, PORT } from "./config.js"
import Index_router from "./routers/index_router.js"
import item_router from "./routers/item_router.js"
import basket_router from "./routers/busket_router.js"
import getAll from "./db.js"

app.use('/', item_router)
app.use('/', Index_router)
app.use('/', basket_router)


try{
    app.listen(PORT, (req, res) =>{
        console.log(`Server started on: ${PORT} port`)
    })
}catch (e){
    console.log(e)
}
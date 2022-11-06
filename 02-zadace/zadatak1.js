import express from "express"
import bodyParser from "body-parser"
import {v4 as uuidv4} from "uuid"
const app=express()
const port=3000

app.use(bodyParser.json())

var tempStorage = []

app.post("/dodajObavjest", (req,res) =>{
    var data = req.body
    console.log(data)
    data={... data, "id":uuidv4(), "datum": new Date()}
    tempStorage.push(data)
    res.send(tempStorage)
})

app.get("/vratiObavjesti", (req,res) =>{
    let filtriranje = []

    tempStorage.forEach(x=>{
        filtriranje.push({
            "naziv" : x.naziv,
            "datum" : x.datum
        })
    });
    res.send(filtriranje)
});

app.get("/vratiObavjest/:id", (req,res) =>{
    var { id } = req.params
    var obavijest = tempStorage.find((x) => x.id == id)
    res.send({
        "naziv": obavijest.naziv,
        "datum" : obavijest.datum,
        "sadrzaj" : obavijest.sadrzaj
    })
})

app.patch("/izmjeniObavjest/:id",(req,res) => {
    var { id } = req.params
    var obavijest = tempStorage.find((x) => x.id == id)
    var { sadrzaj }= req.body
    obavijest.sadrzaj=sadrzaj
    res.send(obavijest)
})

app.listen(port, () => console.log(`Works on port ${port}`));
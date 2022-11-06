/*Kreirajte web servis za dodavanje autora. Sastoji se 3 rute. (dodajAutora,
vratiAutore, izbrisiDjeloAutora) Kod dodavanja autora, očekuje se da se
preda naziv i lista djela. Ukoliko se ne predaju isključivo ta dva ključa
(naziv, djela) odgovara sa sljedecim JSON response -> {"Error":"Krivi
kljucevi"}. Nakon toga provjerava je li duzina imena svakog djela manja
od 20 znakova i u slučaju da nije vraća JSON response sa imenom djela koji
je pre dugacak -> {"Error":"Djelo Process Mining in Practice ima
vise od 20 znakova"} Ako je sve uredu dodaje datum i id, te sprema
autora. Vrati autore vraca sve autore i djela. Ruta za brisanje djela brise
iz liste djela autora jedno djelo.*/

import express from "express"
import bodyParser from "body-parser"
import {v4 as uuidv4} from "uuid"
const app=express()
const port=3000

app.use(bodyParser.json())

var autori = []

app.post("/dodajAutora", (req, res) => {
    var greska = false
    var data = req.body

    if (!data.naziv || !data.djela || Object.keys(data).length != 2) {
        res.send({ "Error": "Krivi kljucevi" });
        greska = true;
    }


    data.djela.forEach(x => {
        if (x.length > 20) {
            res.send({ "Error": `Djelo ${x} ima vise od 20 znakova` });
            greska = true;
        }
    });

    if (!greska) {
     data={... data, "id":uuidv4(), "datum": new Date()}
    autori.push(data)
    res.send(autori)
    }
});

app.get("/vratiAutore",(req,res)=>{
    let filtriranje = []

    autori.forEach(x=>{
        filtriranje.push({
            "naziv" : x.naziv,
            "djela" : x.djela
        })
    });
    res.send(filtriranje)
})

app.delete("/izbrisiDjeloAutora/:id",(req,res)=>{
    var { id } = req.params
    var autorbrisanje = autori.find(autor => autor.id!=id)
    res.send(autorbrisanje)
})

app.listen(port, () => console.log(`Works on port ${port}`));
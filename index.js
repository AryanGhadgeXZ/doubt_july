const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save",(req,res) => {
    const url = "mongodb+srv://zombienationxz:gLcdREYJGVUewwmS@cluster0.tsoh0ez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(url);
    const db = client.db("doubts25july24");
    const coll = db.collection("student");
    const record = {"name": req.body.name, "number":req.body.number, "doubt":req.body.doubt}
    coll.insertOne(record)
    .then(result => res.send(result))
    .catch(error => res.send(error));
});

app.listen(9000, () => {console.log("ready @ 9000");});
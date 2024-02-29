const express = require("express")
const mongoose = require('mongoose');
const cors = require("cors")
const app = express()
require("dotenv").config()
app.use(cors())
app.use(express.json());

const port = process.env.PORT || 5000;
const uri = process.env.DATABASE;

             

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log("db connected")
    console.log("Database Name:", mongoose.connection.name);
}

const Data = mongoose.model('Data', {},'data' );

app.get('/bestOfBrands', async(req,res)=>{
    try {
        const data = await Data.find({category: "bestOfBrands"}); 
        res.json(data);

    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).send('Internal Server Error');
    }
})

app.get('/299Store', async(req,res)=>{
    try {
        const data = await Data.find({category: "299Store"}); 
        res.json(data);

    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).send('Internal Server Error');
    }
})

app.get('/penGiftSets', async(req,res)=>{
    try {
        const data = await Data.find({category: "penGiftSets"}); 
        res.json(data);

    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).send('Internal Server Error');
    }
})



app.listen(port, () => {
    console.log(`listening on port ${port}`)
}) 

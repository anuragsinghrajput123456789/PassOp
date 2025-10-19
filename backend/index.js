import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import bodyParser from "body-parser";
import cors from 'cors'

dotenv.config();
const app = express();



app.use(cors())
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);
const dbName = "passOp";

await client.connect(); // ✅ works now with ES modules
const db = client.db(dbName);
const collection = db.collection("passwords");


//Get all the passwords
app.get("/", async (req, res) => {
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});


// Save a passwords
app.post("/", async (req, res) => {
  const password  = req.body
  const findResult = await collection.insertOne(password);
  res.send({success:true,result : findResult})
});

//Delete a passwords by id
app.delete("/", async (req, res) => {
  const password = req.body
  const findResult = await collection.deleteOne(password);
  res.json({success: true});
});

app.listen(port, () => console.log(`Server running on port ${port}`));

import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
const app: Application = express();
const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`Server listening on ${port}`);
    
});

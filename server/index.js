 import  express  from "express";
 import dotenv from "dotenv";
 import cors from 'cors';
 import Connection from "./database/db.js";
 import sipu from "./routes/route.js";

 

const app=express();

dotenv.config();

 app.use(cors());

 
 app.use('/',sipu);

const PORT=8000;

const userName=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;    



 Connection(userName,password);
 

app.listen(PORT,() => console.log (`server is running sucessfully on PORT ${PORT}`));

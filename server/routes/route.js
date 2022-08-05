import express, { Router }  from 'express';
import { adduser } from '../Controler/usercontroller.js';
const sipu = express.Router();
sipu.post('/add', adduser)



export default sipu;
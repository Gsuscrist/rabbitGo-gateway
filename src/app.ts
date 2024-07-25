import express from 'express';
import {Signale} from 'signale';
import proxy from "express-http-proxy";



const app = express();
const signale = new Signale();

app.use(express.json())

app.use('/report_mcs',proxy('http://localhost:8081'));
app.use('/shuttle_mcs',proxy('http://localhost:8082'));
app.use('/user_mcs',proxy('http://localhost:8083'));
app.use('/tm',proxy('http://localhost:5000'));
app.use('/ts',proxy('http://localhost:5050'));



app.listen(8080,()=>{
    signale.success("Server on line in port: 8080")
})

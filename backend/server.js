import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const app =express();
app.use(cors());
 
const PORT = process.env.PORT  || 4001;


// ** Middleware **

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res)=>{
    res.send("backend using  pridsma ORM !!!")
});

// ** routes file **
import routes from './routes/index.js';
app.use(routes);

app.listen(PORT, ()=>{
    console.log(`Sever is running on port ${PORT}`);
});
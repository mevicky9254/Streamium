import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({
    path: './env'
});

//Database connection setup
connectDB().then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
      console.log(`The server has started on ${process.env.PORT}`);
    });
}).catch((error)=>{
   console.log("MongoDB Connection Error !! ", error);
});




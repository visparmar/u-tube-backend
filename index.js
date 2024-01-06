import connectDB from './Database/db.js'
import dotenv from "dotenv"
dotenv.config({
    path:'./env'
})

connectDB();
import mongoose from "mongoose";

const connectDB=async ()=>{
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI, {
            dbName: `${process.env.DB_Name}`, 
        });
        console.log("DataBase connected Successfuly")
    //   console.log("connection String",connectionInstance);
    } catch (error) {
        console.log("failed:-",error)
        process.exit(1);
    }

}

export default connectDB;
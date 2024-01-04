import mongoose from "mongoose";


export const connectDB = async () => {
    mongoose.set('strictQuery', true)
    let isConnected = false
    if(isConnected) return;

    try{
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "ticket",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true
        console.log("MongoDB Connected")
    }catch(error){
        console.log(error)
    }
}

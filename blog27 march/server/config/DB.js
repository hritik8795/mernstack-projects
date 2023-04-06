const mongoose = require("mongoose")
const colors =require("colors")

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to mongo db successfully`.bgMagenta.white);
    } catch (error) {
        console.log(`mongo connection error${error}`.bgRed.white)
        
    }
}
module.exports =connectDB;
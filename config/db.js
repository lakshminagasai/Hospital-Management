const mongoose=require("mongoose")
const colors=require("colors")
const connectDB = async() => {
    try{
    await  mongoose.connect(process.env.MONGODB_URL)
       console.log(`Mongodb server connected successfully ${mongoose.connection.host}`.bgBlue.white)
    }catch(error){
        console.log(` Mongodb  Server error ${error}`);
    }
}
module.exports = connectDB;
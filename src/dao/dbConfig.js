import mongoose from "mongoose";

const URI = "mongodb+srv://castrodry7:123rnc@cluster0.cmxeksp.mongodb.net/ecommerce?retryWrites=true&w=majority"

await mongoose.connect(URI, {
    serverSelectionTimeoutMS:5000,
})
console.log("Base de datos conectada....");
import mongoose from "mongoose";

async function connectDataBase(){
    mongoose.connect("mongodb+srv://alvesgilvan9:Gilvsalves@estocagem.lr1nobr.mongodb.net/?retryWrites=true&w=majority")
    return mongoose.connection;

}
export default connectDataBase

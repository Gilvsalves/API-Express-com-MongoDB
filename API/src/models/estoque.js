import mongoose from "mongoose";

const estoqSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    titulo:{type: String, require: true},
    empresa:{type: String},
    salario:{type: Number}
},{versionKey: false}
);

const estoq = mongoose.model("Estoque", estoqSchema);

export default estoq;

//api express com mongo db
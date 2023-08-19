const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const orderschema = new Schema({
    products: { type: Object, required: true },
    quantity: { type: Number, required: true }

});
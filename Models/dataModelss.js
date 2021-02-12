const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const duLieuDess = new Schema({
    id: {type: Number, required: true, unique: true},
    mon: {type: String, required: true},
    kieude: {type: String, required: true},
    body: {type: Array, required: true},
    date: {type: String},
    img: {type: Array},
    ip: {type: String}
})


module.exports = mongoose.model('newnewdulieude', duLieuDess);
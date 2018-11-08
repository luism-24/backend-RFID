const mongoose = require('mongoose'); 
const  { Schema } = mongoose; 

const UserSchema = new Schema({
    codigo: { type: String, required: true }, 
    name: { type: String, required: true}, 
    position: {type: String, required: true},
});

module.exports = mongoose.model('User', UserSchema); 
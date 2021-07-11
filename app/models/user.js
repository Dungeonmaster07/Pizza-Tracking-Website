const mydb = require('mongoose')
const Schema = mydb.Schema

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, default: 'customer'}
}, { timestamps: true })

module.exports =  mydb.model('User', userSchema)
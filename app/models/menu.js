const mydb = require('mongoose')
const Schema = mydb.Schema

const menuSchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    size: {type: String, required: true}
})

module.exports =  mydb.model('Menu', menuSchema)
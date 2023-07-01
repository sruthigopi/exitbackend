const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://sruthigkani:sruthi@cluster0.v3fy1hn.mongodb.net/recipeedb?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected")
})
.catch(err=>{console.log(err)});
let Schema =mongoose.Schema;

const recipeeSche = new Schema({
    Image:String,
    Title:String,
    Duration:Number,
    Number:Number,    
});
var recipeeModel =mongoose.model("recipee",recipeeSche);
module.exports =recipeeModel;
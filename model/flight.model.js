const mongoose=require('mongoose');

const schema=mongoose.Schema({
    airline:{
    type:String,
    required:true
   },
   flightNo:{
    type:String,
    required:true 
   },
   departure:{
    type:String,
    require:true
   },
   arrival:{
    type:String,
    required:true
   },
   departureTime:{
     type:String,
     required:true
   },
   arrivalTime:{
    type:String,
    required:true
   },
  

   seats:{
    type:Number,
    required:true
   },
   price:{
    type:Number,
    required:true
   }

})


const Flight=mongoose.model("flight",schema)

module.exports={Flight}
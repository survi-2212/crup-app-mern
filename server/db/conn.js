const mongoose = require("mongoose")

const DB = "mongodb+srv://survi:Suravi%402212@cluster0.vc1t22n.mongodb.net/mernstack?retryWrites=true&w=majority"


mongoose.set('strictQuery', false);

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("Connection start")).catch((error)=>console.log(error.message))


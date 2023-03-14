const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const models=require('./Models/models');
const express= require('express');
const mongoose= require('mongoose');
const crudfuncs = require('./crudfuncs/crudfuncs');
const cors= require('cors');
mongoose.connect(process.env.CONN_STR,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true

    }).then((conn)=>
    {
    console.log("SUCCESS MONGODB Connection");
    }
    ).catch((err)=>{console.log("ERROR MONGODB")})


// test.save().
// then((doc) => {console.log(doc)})
// .catch((err) => {console.log("Error: "+err);});

 
const app = express();
app.use(cors());
app.use(express.json());


app.post('/propertypro/post/ForSale', crudfuncs.postForSale);

app.get('/propertypro/get/ForSale', crudfuncs.getForSale);

app.post('/propertypro/get/ForSale/:id', crudfuncs.getForSaleID);




app.listen(process.env.PORT,()=>{
console.log('listening on port '+process.env.PORT+"...");
})
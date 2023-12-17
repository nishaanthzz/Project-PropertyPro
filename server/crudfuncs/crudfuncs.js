const ForSaleModel=require('../Models/models')



//ForSale
exports.getForSale= async (req, res)=>
{
    try {
       obj= await ForSaleModel.find();
        res.status(200).json({"status": "Success", "data": obj})
    }
    catch (err) {
        res.status(500).json({status:"Failed","mesaage":"Getting failed","Error":err.message});
    }


}
exports.getForSaleID=   async (req, res)=>{
    try {
        
        obj= await ForSaleModel.findById( req.params.id);
       
        res.status(200).json({"status": "Success", "data": obj})
        
    }
    catch (err) {
        res.status(404).json({status:"Failed","mesaage":"Get failed",error: err.message});
    }

}


exports.postForSale= async (req, res)=>{
    try {
        
    const obj = await ForSaleModel.create(req.body);
    res.send({"status":"Success",
    "data":obj })}
    catch (err) {
        res.send({status:"Failed","mesaage":"Insert failed",err});
    }

}

exports.deleteForSale= async (req, res)=>{
    try {
    }
    catch (err) {
        res.json({status:"Failed","mesaage":"Insert failed",err});
    }


}

//RentLease
exports.getRentLease= async (req, res)=>{
    try {
    }
    catch (err) {
        res.send({status:"Failed","mesaage":"Insert failed",err});
    }

}





exports.getRentLeaseID= async(req, res)=>{
    try {
    }
    catch (err) {
        res.send({status:"Failed","mesaage":"Insert failed",err});
    }

}




exports.updateInterests= async (req, res)=>{
    try {
       
       result = await ForSaleModel.findByIdAndUpdate(req.params.id,req.body);
         res.status(200).json({"status":"Success",
            "data":result })}
    
    catch (err) {
        res.status(400).json({status:"Failed","message":"Insert failed",err});
    }

}
exports.postRentLease= async (req, res)=>{
    try {
        const obj = await ForSaleModel.create(req.body);
        res.send({"status":"Success",
        "data":obj })}
        catch (err) {
            res.send({status:"Failed","mesaage":"Insert failed",err});
        }
    
}

exports.deleteRentLease= async (req, res)=>{
    try {
    }
    catch (err) {
        res.send({status:"Failed","mesaage":"Insert failed",err});
    }
    

}


//Plots


exports.getPlotsID=async (req, res)=>{
    try {
        
    }
    catch (err) {
        res.send({status:"Failed","mesaage":"Insert failed",err});
    }

}

exports.getPlots=async (req, res)=>{
    try {
    }
    catch (err) {
        res.send({status:"Failed","mesaage":"Insert failed",err});
    }


}
exports.postPlots= async (req, res)=>{
    try {
        }
        catch (err) {
            res.send({status:"Failed","mesaage":"Insert failed",err});
        }
    



}
exports.deletePlots= async (req, res)=>{
    try {
    }
    catch (err) {
        res.send({status:"Failed","mesaage":"Insert failed",err});
    }

}



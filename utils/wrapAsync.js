const wrapAsync= function(func){
    return (req,res,next)=>{
        func(req,res,next).catch(next);
    }
}
module.exports=wrapAsync
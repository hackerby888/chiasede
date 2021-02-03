const dataModel = require('../Models/dataModel');
var date = new Date();

    var options = {
        weekday: "short",
        year: "numeric",
        month: "2-digit",
        day: "numeric"
    };

function uploadData(req,res,next) {
    console.log("ok")
    req.body.id = res.locals.id;
    req.body.date = date.toLocaleDateString("vi", options);
    req.body.img = res.locals.img;
    req.body.ip = req.cookies.ip;
    

    var dataUpload = new dataModel(req.body);
    dataUpload.save()
    .then(() => {
        res.render('upload', {status: "success"})
        
    })
    .catch(next);
    
}

module.exports  = uploadData;
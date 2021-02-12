const dataModel = require('../Models/dataModel');
const dataModels = require('../Models/dataModels');
const dataModelss = require('../Models/dataModelss');
var date = new Date();

    var options = {
        weekday: "short",
        year: "numeric",
        month: "2-digit",
        day: "numeric"
    };

function uploadData(req,res,next) {
    req.body.id = res.locals.id;
    req.body.date = date.toLocaleDateString("vi", options);
    req.body.img = res.locals.img;
    req.body.ip = req.cookies.ip;

    if(req.cookies.url) {
        if(req.cookies.url === '10') {
            var dataUpload = new dataModel(req.body);
        dataUpload.save()
        .then(() => {
            res.render('upload', {status: "success", urlback: "/khoi-10"})
            
        })
        .catch(next);
        }
        
    
        if(req.cookies.url === '11') {
            var dataUpload = new dataModels(req.body);
        dataUpload.save()
        .then(() => {
            res.render('upload', {status: "success", urlback: "/khoi-11"})
            
        })
        .catch(next);
        }
    } else {
        res.render('upload', {status: "error"})
    }

    //12
     
    if(req.cookies.url) {
        if(req.cookies.url === '12') {
            var dataUpload = new dataModelss(req.body);
        dataUpload.save()
        .then(() => {
            res.render('upload', {status: "success", urlback: "/khoi-12"})
            
        })
        .catch(next);
        }
    


}
}

    

   
    

 module.exports = uploadData;
const dataModels = require('../Models/dataModelss');
const ipModels = require('../Models/ipModel');
const fs = require("fs");
var ip;
var id;
var img;
//createFunctionBannedIP
function bannedIp(ip, img, req,res,next) {
    ipModels.find({ip: ip})
    .then(data => {

        if(data.length == 0) {
        var band = new ipModels({ip: ip})
         band.save()
         .then(() => {
            if(img.length == 0) {
                res.redirect("/khoi-12")
            } else {
                img.map(img => {
                    fs.unlink(`./public/img/${img}`, function(err) {
                        console.log(err)
                    });
                })
                res.redirect("/khoi-12")
            }
         })
        } else {
//
if(img.length == 0) {
    res.redirect("/khoi-12")
} else {
    img.map(img => {
        fs.unlink(`./public/img/${img}`, function(err) {
            console.log(err)
        });
    })
    res.redirect("/khoi-12")
}
//
        }
        
    })
}

//chinh
function deleteDe(req,res,next) {


 
           dataModels.find({id: req.params.id})
           .then(data => {
               ip = data[0].ip;
               id = data[0].id;
               img = data[0].img;
           })
           .then(() => {
               dataModels.remove({id: id}, (err) => {
                if(!err) {
                    bannedIp(ip, img, req,res,next);
                }
               })
           })
        
        

    
}
          
module.exports = deleteDe;








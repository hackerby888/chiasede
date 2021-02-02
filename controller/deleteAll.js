const dataModels = require('../Models/dataModel');
const fs = require("fs");
var arrayImg = [];

function deleteAll(req,res,next) {
    dataModels.find({})
    .then(data => {

        for(var img of data) {
            for(imgChild of img.img) {
                fs.unlink(`./public/img/${imgChild}`, function(err) {
                    console.log(err)
                });
            }
        }

        arrayImg = [];
        

    })
    .then(() => {
        dataModels.remove()
.then(() => {
    res.redirect('/')
})
.catch(next)
    })
    
}

module.exports = deleteAll;

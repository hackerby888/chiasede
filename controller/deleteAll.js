const dataModel = require('../Models/dataModel');
const dataModels = require('../Models/dataModels');
const dataModelss = require('../Models/dataModelss');
const fs = require("fs");
var arrayImg = [];

function deleteAll(req,res,next) {

  
    //10

    if(req.cookies.url === '10') {
        dataModel.find({})
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
        dataModel.remove()
.then(() => {
    res.redirect('/khoi-10')
})
.catch(next)
    })
    }


    //11

    if(req.cookies.url === '11') {
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
    res.redirect('/khoi-11')
})
.catch(next)
    })
    }

    //12

    
    if(req.cookies.url === '11') {
        dataModelss.find({})
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
        dataModelss.remove()
.then(() => {
    res.redirect('/khoi-12')
})
.catch(next)
    })
    }


    

}
    
    


module.exports = deleteAll;

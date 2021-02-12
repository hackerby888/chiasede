const dataModel = require('../Models/dataModel');
const dataModels = require('../Models/dataModels');
const dataModelss = require('../Models/dataModelss');
const mongoose  = require('mongoose');


function checkId(req,res,next) {


    if(req.cookies.url) {

        if(req.cookies.url === '10') {
            dataModel.find({})
    .then(data => {

         if(req.body.body.length == 0) {
             res.render('upload', { tus: "Không được để trống"});
         } else {

            if(req.files.gallery) {

                var files = req.files.gallery;

                var arrayName = [];
    
                 files.map(data => {
                     arrayName.push(data.filename)
                 })
                
                 res.locals.img = arrayName;

            }

            res.locals.id = data.length + 1;
            next();

         }

        
    })
    .catch(next);
        }

        if(req.cookies.url === '11') {

            dataModels.find({})
    .then(data => {

         if(req.body.body.length == 0) {
             res.render('upload', { tus: "Không được để trống"});
         } else {

            if(req.files.gallery) {

                var files = req.files.gallery;

                var arrayName = [];
    
                 files.map(data => {
                     arrayName.push(data.filename)
                 })
                
                 res.locals.img = arrayName;

            }

            res.locals.id = data.length + 1;
            next();

         }

        
    })
    .catch(next);

        }


        //12

            if(req.cookies.url === '12') {
                dataModelss.find({})
        .then(data => {
    
             if(req.body.body.length == 0) {
                 res.render('upload', { tus: "Không được để trống"});
             } else {
    
                if(req.files.gallery) {
    
                    var files = req.files.gallery;
    
                    var arrayName = [];
        
                     files.map(data => {
                         arrayName.push(data.filename)
                     })
                    
                     res.locals.img = arrayName;
    
                }
    
                res.locals.id = data.length + 1;
                next();
    
             }
    
            
        })
        .catch(next);
            }

    } else {
        res.render('upload', {status: "error"})
    }


    //12

    

}

module.exports = checkId;
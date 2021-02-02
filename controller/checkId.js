const dataModel = require('../Models/dataModel');
const mongoose  = require('mongoose');


function checkId(req,res,next) {


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

module.exports = checkId;
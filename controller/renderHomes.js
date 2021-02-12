const newdataModels = require('../Models/dataModels');
const mongoose = require('mongoose');
function renderHomes(req,res,next) {
   
    newdataModels.find({}).sort({id: -1})
    .then((data) => {

       
        data = data.map((data) => data.toObject())
        res.render('homes', {
            data: {
                data: data,
            }
        })
        
    })
    .catch(next)

}

module.exports = renderHomes;

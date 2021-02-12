const dataModelss = require('../Models/dataModelss');
const mongoose = require('mongoose');
function renderHomess(req,res,next) {
   
    dataModelss.find({}).sort({id: -1})
    .then((data) => {

       
        data = data.map((data) => data.toObject())
        res.render('homess', {
            data: {
                data: data,
            }
        })
        
    })
    .catch(next)

}

module.exports = renderHomess;

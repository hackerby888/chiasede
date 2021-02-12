const dataModel = require('../Models/dataModel')
const mongoose = require('mongoose')
function renderHome(req,res,next) {
   
    dataModel.find({}).sort( { id: -1} )
    .then((data) => {
        
        data = data.map((data) => data.toObject())
        res.render('home', {
            data: {
                data: data,
            }
        })
        
    })
    .catch(next)

}

module.exports = renderHome;
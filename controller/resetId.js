const dataModel = require('../Models/dataModel');
const dataModels = require('../Models/dataModels');
const dataModelss = require('../Models/dataModelss');

function resetId(req,res,next) {


        if(req.cookies.url === '10') {
            dataModel.find({}).sort({id: 1})
            .then(data => {
        
                data.map((data,index) => {
        
                    var currentId = data.id
                    var newID = index + 1
                    
                    dataModel.findOneAndUpdate({id: currentId}, {id: newID}, function(err,data) {
        
        
        
                    })
        
        
                })
                
            })
            .then(() => {
                res.redirect('/khoi-10')
            })
        }

        if(req.cookies.url === '11') {
            dataModels.find({}).sort({id: 1})
            .then(data => {
        
                data.map((data,index) => {
        
                    var currentId = data.id
                    var newID = index + 1
                    
                    dataModels.findOneAndUpdate({id: currentId}, {id: newID}, function(err,data) {
        
        
        
                    })
        
        
                })
                
            })
            .then(() => {
                res.redirect('/khoi-11')
            })
        }


        //12

        if(req.cookies.url === '12') {
            dataModelss.find({}).sort({id: 1})
            .then(data => {
        
                data.map((data,index) => {
        
                    var currentId = data.id
                    var newID = index + 1
                    
                    dataModelss.findOneAndUpdate({id: currentId}, {id: newID}, function(err,data) {
        
        
        
                    })
        
        
                })
                
            })
            .then(() => {
                res.redirect('/khoi-12')
            })
        }
      

}


module.exports = resetId;
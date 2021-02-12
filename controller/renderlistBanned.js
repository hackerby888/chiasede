const ipModels = require('../Models/ipModel');

function renderlistBanned(req,res,next) {
 

            ipModels.find({})
            .then((data) => {
                data = data.map(data => data.toObject())
                res.render('listbanned', {data})
            })
            .catch(next)

        
}

module.exports = renderlistBanned;
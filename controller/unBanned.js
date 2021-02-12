const ipModels = require('../Models/ipModel');

function unBanned(req,res,next) {


            ipModels.remove({ ip: req.params.id})
            .then(() => {
                console.log("ACTIVE IP:" + req.params.id)
                res.redirect('/listBanned')
            })
            .catch(next)

    
}

module.exports = unBanned;
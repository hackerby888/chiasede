const ipModels = require('../Models/ipModel');

function unBanned(req,res,next) {


    if(req.cookies.admin_id) {
        if(req.cookies.admin_id.user == 'quycuoi673' && req.cookies.admin_id.password == 'quycuoi673vn') {

            ipModels.remove({ ip: req.params.id})
            .then(() => {
                console.log("ACTIVE IP:" + req.params.id)
                res.redirect('/listBanned')
            })
            .catch(next)

        } else {
            res.redirect('/');
        }
    } else {
        res.redirect('/');
    }
    
}


module.exports = unBanned;
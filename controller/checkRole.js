const userModels = require('../Models/userModel')
function checkRole(req,res,next) {
    if(req.cookies.admin_id) {
      
        var user = req.cookies.admin_id.user;
        var pass = req.cookies.admin_id.password;

        //check
        userModels.findOne({user:user})
        .then(data => {
            if(data) {

                if(data.password === pass) {
                    res.send({
                        user: user,
                        admin: true
                    })
                
                } else {
                    res.send({
                        admin: false
                    })
                }

            } else {
                res.send({
                    admin: false
                })
            }
        })
        
    } else {
        res.send({
            admin: false
        })
    }
}


module.exports = checkRole;
const userModels = require('../Models/userModel');
const ipModels = require('../Models/ipModel');


function checkAdmin(req,res,next) {

    if(req.cookies.admin_id) {

        var user = req.cookies.admin_id.user;
        var pass = req.cookies.admin_id.password;

        userModels.findOne({user: user})
        .then((data_user) => {

            if(data_user) {
 
                data_user = data_user.toObject();
                
                if(data_user.password === pass) {
                    next();

                } else {
                    res.redirect('/khoi-10')
                }

            } else {
                res.redirect('/khoi-10')
            }
 
        })
        
        } else {

            res.redirect('/khoi-10')

         }
        }


module.exports = checkAdmin;


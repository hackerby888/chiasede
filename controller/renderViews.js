const dataModel = require('../Models/dataModel');
const userModel = require('../Models/userModel');
var dataViews;

function renderViews(req,res,next) {
    dataModel.findOne({ id: req.params.id })
    .then((data) => {
        dataViews = data.toObject();

       if(req.cookies.admin_id) {

        var user = req.cookies.admin_id.user;
        var pass = req.cookies.admin_id.password;

        //callServerToCheckUser&Password
        userModel.findOne({user: user})
        .then(data => {
            if(data) {

                //checkPassword
                if(data.password === pass) {
                    res.render('views', {data: dataViews, admin: "true"})
                } else {
                    res.render('views', {data: dataViews})
                }

            } else {
                res.render('views', {data: dataViews})
            }
        })

       } else {
        res.render('views', {data: dataViews})
       }
        
    })
    .catch(next)
}
        
          

module.exports = renderViews;



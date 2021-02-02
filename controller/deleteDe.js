const dataModels = require('../Models/dataModel');
const ipModels = require('../Models/ipModel');
var ip;
var id;

function deleteDe(req,res,next) {
    if(req.cookies.admin_id) {
        if(req.cookies.admin_id.user == 'quycuoi673' && req.cookies.admin_id.password == 'quycuoi673vn') {
           dataModels.find({id: req.params.id})
           .then(data => {
               ip = data[0].ip;
               id = data[0].id;
           })
           .then(() => {

            dataModels.remove({id: id}, function(err) {
                if(!err) {
                    var neww = new ipModels({ip: ip})
                    neww.save()
                    .then(() => {
                     res.redirect('/')
                    })
                    .catch(next)
                } else {
                    next();
                }
            })
               
           })
           .catch(next)
           
        } else {
            res.redirect('/');
        }
    } else {
        res.redirect('/');
    }
}


module.exports = deleteDe;
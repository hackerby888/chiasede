const dataModel = require('../Models/dataModel');

function resetId(req,res,next) {

    if(req.cookies.admin_id) {
        if(req.cookies.admin_id.user == 'quycuoi673' && req.cookies.admin_id.password == 'quycuoi673vn') {

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
        res.redirect('/')
    })

        } else {
            res.redirect('/');
        }
    } else {
        res.redirect('/');
    }

}


module.exports = resetId;
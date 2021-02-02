const dataModel = require('../Models/dataModel');

function renderViews(req,res,next) {
    dataModel.findOne({ id: req.params.id })
    .then((data) => {
        data = data.toObject();
        if(req.cookies.admin_id) {
            if(req.cookies.admin_id.user == 'quycuoi673' && req.cookies.admin_id.password == 'quycuoi673vn') {

                res.render('views', {data, admin: "true"})

            } else {
                res.render('views', {data})
            }
        } else {
            res.render('views', {data})
        }
        
    })
    .catch(next)
}
        
          

module.exports = renderViews;



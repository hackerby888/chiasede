const ipModels = require('../Models/ipModel');

function renderlistBanned(req,res,next) {
    if(req.cookies.admin_id) {
        if(req.cookies.admin_id.user == 'quycuoi673' && req.cookies.admin_id.password == 'quycuoi673vn') {

            ipModels.find({})
            .then((data) => {
                data = data.map(data => data.toObject())
                res.render('listbanned', {data})
            })
            .catch(next)

        } else {
            res.redirect('/');
        }
    } else {
        res.redirect('/')
    }
}

module.exports = renderlistBanned;
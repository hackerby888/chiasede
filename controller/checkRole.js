function checkRole(req,res,next) {
    if(req.cookies.admin_id) {
        if(req.cookies.admin_id.user == 'quycuoi673' && req.cookies.admin_id.password == 'quycuoi673vn') {
            res.send({
                admin: true
            })
        }
    } else {
        res.send({
            admin: false
        })
    }
}


module.exports = checkRole;
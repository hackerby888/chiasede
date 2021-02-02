const ipModel = require('../Models/ipModel');

function checkIp(req,res,next) {

    ipModel.findOne({ ip: req.body.ip})
    .then((data) => {
        if(data) {
            
            res.send('banned');

        } else {
            var ip = req.cookies.ip;
            if(ip) {
                res.cookie("ip", req.body.ip)
                next()
            } else {
                res.cookie("ip", req.body.ip)
                next()
            }
            
        }
        
    })



}

module.exports = checkIp;
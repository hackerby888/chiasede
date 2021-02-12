

function checkUrl(req,res,next) {
    if(req.cookies.url) {

        if(req.cookies.url === '10') {
            res.redirect('/khoi-10')
            
        }

        if(req.cookies.url === '11') {
            res.redirect('/khoi-11')
            
        }


        if(req.cookies.url === '12') {
            res.redirect('/khoi-12')
        }

    } else {
        res.redirect('/khoi-10')
    }
}


module.exports = checkUrl;
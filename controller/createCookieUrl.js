


function createCookieUrl(req,res,next) {

           
            var url = req.url;
        

            if(url.includes('/khoi-10')) {
                res.cookie('url', '10')
            }
            if(url.includes('/khoi-11')) {
                res.cookie('url', '11')
            }
            if(url.includes('/khoi-12')) {
                res.cookie('url', '12')
            }
            next();
}


module.exports = createCookieUrl;
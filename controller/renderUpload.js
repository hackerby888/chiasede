const { reset } = require("nodemon");

function renderUpload(req,res) {



    res.render('upload')

}

module.exports = renderUpload;
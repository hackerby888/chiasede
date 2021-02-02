
function renderSignup(req,res,next) {

    res.render('signup', {
        tus: {
            user: "Nhập Tài Khoản",
            password: "Nhập Mật Khẩu"
        }
    });

}

module.exports = renderSignup;
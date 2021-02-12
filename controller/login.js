const userModel = require('../Models/userModel')

function login(req,res,next) {
    userModel.findOne({ user: req.body.user})
    .then((user) => {

        if(user) {
            if(req.body.password == user.password) {
                if(req.body.user.includes("<") == false && req.body.user.includes(">") == false && req.body.user.includes("script") == false && req.body.password.includes("<") == false && req.body.password.includes(">") == false && req.body.password.includes("script") == false && req.body.user.includes("==") == false && req.body.user.includes("||") == false) {

                    res.cookie("admin_id", {
                        user: req.body.user,
                        password: req.body.password
                    })
                    res.redirect('/khoi-10')

                } else {

                    res.render('login', {
                        tus: {
                            user: "User Not Found",
                            password: "Password Not Found"
                        }
                    })

                }
            } else {
                res.render('login', {
                    tus: {
                        user: "Nhập Tài Khoản",
                        password: "Sai Mật Khẩu"
                    }
                })
            }
        } else {
            
            res.render('login', {
                tus: {
                    user: "Tài Khoản Không Tìm Thấy",
                    password: "Nhập Mật Khẩu"
                }
            })

        }

        
    })
    .catch(next);
}

module.exports = login;
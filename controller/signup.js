const userModel = require('../Models/userModel');

function signup(req,res,next) {

     if(req.body.user == '') {
         res.render('signup', {
             tus: {
                 user: "Tên Tài Khoản Không Được Để Trống",
                 password: "Nhập Mật Khẩu"
             }
         })

     } else if(req.body.password == '') {

        res.render('signup', {
            tus: {
                user: "Nhập Tài Khoản",
                password: "Mật Khẩu Không Được Để Trống"
            }
        })

     } else {

        userModel.findOne({user: req.body.user})
        .then((data) => {
            if(data) {

                res.render('signup', {
                    tus: {
                        user: "Tài Khoản Đã Tồn Tại",
                        password: "Nhập Mật Khẩu"
                    }
                })

            } else {

                    if(req.body.user.includes("<") == false && req.body.user.includes(">") == false && req.body.user.includes("script") == false && req.body.password.includes("<") == false && req.body.password.includes(">") == false && req.body.password.includes("script") == false && req.body.user.includes("==") == false && req.body.user.includes("||") == false) {


                        
                var newUser = new userModel(req.body)
                newUser.save()
                .then(() => {

                    res.render('signup', {status: "Tạo tài khoản thành công"})

                })
                .catch(next)


                    } else {

                        res.render('signup', {
                            tus: {
                                user: "Tên Tài Khoản Không Hợp Lệ",
                                password: "Mật Khẩu Không Hợp Lệ"
                            }
                        })

                    }

            } 
        })
        .catch(next)

     }
    
}

module.exports = signup;
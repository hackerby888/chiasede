

function renderLogin(req,res,next) {
      
   res.render('login', {
      tus: {
         user: "Nhập Tài Khoản",
         password: "Nhập Mật Khẩu"
      }
   })
    
}

module.exports = renderLogin;
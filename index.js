const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const handlebars  = require('express-handlebars');
//RequireRenderHome
const renderHome = require('./controller/renderHome');
//RequireRenderViews
const renderViews = require('./controller/renderViews');
//RequireRenderLogin
const renderLogin = require('./controller/renderLogin');
//RequireCreateAccount
const renderSignup = require('./controller/renderSignup');
//RequireRenderHomess
const renderHomess = require('./controller/renderHomess');
//Mongoose
const mongoose = require('mongoose');
//RsrenderUpload
const renderUpload =  require('./controller/renderUpload');
//RequireCheckIp
const checkIp = require('./controller/checkIp');
//RequireDeleteAll
const deleteAll = require('./controller/deleteAll');
//RequirePostData
const uploadData = require('./controller/uploadData');
//RequireCheckId
const checkId  = require('./controller/checkId');
//RequireLoginFunction
const login = require('./controller/login');
//RequireUnBanned
const unBanned = require('./controller/unBanned');
//RequireSignUp
const signup = require('./controller/signup');
//RequireCheckAdmin
const checkAdmin = require('./controller/checkAdmin')
//RequireCheckRole
const checkRole = require('./controller/checkRole');
//RequirerenderListbennded
const renderlistBanned = require('./controller/renderlistBanned');
//RequiredeleteDes
const deleteDes = require('./controller/deleteDes');
//RequireCreateCookieUrl
const createCookieUrl = require('./controller/createCookieUrl');
//RequireRenderViewsss
const renderViewsss = require('./controller/renderViewsss')
//RequireDeleteDe
const deleteDe = require('./controller/deleteDe');
//RequireDeleteDess
const deleteDess = require('./controller/deleteDess')
//RequireCheckUrl
const checkUrl = require('./controller/checkUrl');
//RequireRenderHome1
const renderHomes = require('./controller/renderHomes');
//RequireRenderViess
const renderViewss = require('./controller/renderViewss');
//RequireMulter
const multer = require('multer');
var upload = multer({ dest: 'public/img' });
var cpUpload = upload.fields([{ name: 'gallery', maxCount: 8 }])
//RequireResetId
const resetId  = require('./controller/resetId');
//JWT Enode
const jwt = require('jsonwebtoken');
//CookieParser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//Template Engine
app.engine('handlebars', handlebars({
  helpers: {
    sum: (a,b) => {
      return a+b;
    }
  }
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

//SetStaticView
app.use(express.static(path.join(__dirname, 'public')));

//BodyParser
app.use(express.urlencoded());
app.use(express.json());

//Connect DB
var url = "mongodb+srv://c:quycuoi673vn@cluster0.4esaa.mongodb.net/chiasede?retryWrites=true&w=majority";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true});


//Endpoint

//[GET]KHoi12
app.get('/khoi-12',createCookieUrl, renderHomess)

//GET[Khoi11]
app.get('/khoi-11', createCookieUrl, renderHomes);

//[GET Home]
app.get('/khoi-10', createCookieUrl, renderHome);

//[GET Home]
app.get('/', checkUrl);

//[GET Views]
app.get('/viewsss:id', renderViewsss);
app.get('/viewss:id', renderViewss);
app.get('/views:id', renderViews);

//[GET Login]
app.get('/141214', renderLogin);
app.post('/141214', login);


//[GET Upload]
app.get('/upload', renderUpload);
app.post('/upload',cpUpload, checkId, uploadData);

//Reset ID
app.get('/resetId', checkAdmin, resetId);

//CheckIp
app.post('/checkIp', checkIp);

//CheckRole
app.post('/checkRole', checkRole);

//[GET]ListBanned
app.get('/listBanned', renderlistBanned);

//GetUnnbaned
app.get('/unBanned:id', checkAdmin, unBanned);

//setUrl
app.post('/setUrl', createCookieUrl);

//GetDeleleDE&&BannedIP
app.get('/deleteDess:id', checkAdmin, deleteDess);
app.get('/deleteDes:id', checkAdmin, deleteDes);
app.get('/deleteDe:id', checkAdmin, deleteDe);
app.get('/deleteAll', checkAdmin, deleteAll);

//GetNotFuond
app.get('*', (req,res,next) => {
  res.render('errorNotFoundPage')
});



//ConnectSever
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})
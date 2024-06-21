const express = require('express')
const app = express()
// middleware execute first
app.use(function(req,res,next)
{
//    request mai user data
// response mai server se code
next();

});
// controller khud se next route pr nhi jyega next ka use middleware se controller ko next route pr le jane ke liye krte h but in this version execution of next is not important
app.use(function(req,res,next)
{
//    request mai user data
// response mai server se code
console.log("middleware working")
next();

});
app.set("view engine","ejs");
// app.use(express.static(../public/stylesheets));
app.get('/', function (req, res) {
  res.render('index')
});
// :username->params
app.get('/profile/:username', function (req, res) {
    res.render(`Hello from ${req.params.username} `);
  });
app.listen(3000)
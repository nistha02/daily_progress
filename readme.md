express js-package,routing, request handle
http is difficult and express make things easier
routes bnana 
/contact/nistha/12
/home

steps-
1. npm init -y
2. npm i express
3. node .\script.js
4. go to http://localhost:3000/

nodemon ka use krte h khud hi server restart krrne ke liye

middleware execute before middleware

google.com/profile/nistha
google.com/profile/jack
google.com/profile/krish
dynamic routing
prefix same hota h..bss end mai change hota hisliye dynamic route
/profile/:username
:means anything

 res.send(`Hello from ${req.params.username} `);
 it means we want to access any value of username

 template engine-ejs
 html can not calculate.ejs is html
 we can write js in ejs

 ejs setup-
 npm i ejs
 configure ejs
 app.set("view engine","ejs");
 make views folder
  make ejs file in that folder
send ki jgeh render kro

tempelate engine-markup style that later convert in html

static file setup-
make public folder
  create three folder inside it images,stylesheets,javascripts
configure the express static in script.ejs
understand path
this file is changed to learn github
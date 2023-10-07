const express = require('express');
const app = express();
const router = express.Router();

const user = require("./user.json");


/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {
  let helloHtml = __dirname + "/home.html";
  res.sendFile(helloHtml);
});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => {
    try{
        res.json(user);
    }catch(e){
        console.log("user.json not found");
    }
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/

// query string => http://localhost:8282/login?username=bret&password=bret@123
router.get('/login', (req,res) => {
    let userQuery = req.query;

    // guard clause method
    if(userQuery.username != user.username){
        res.json(
            {
                status: false,
                message: "User Name is invalid"
            }
        );
    }else if(userQuery.password != user.password ){
        res.json(
            {
                status: false,
                message: "Password is invalid"
            }
        )
    }else{
        res.json(
            {
                status: true,
                message: "User Is valid"
            }
        )
    }

});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/

// query = /logout?username
router.get('/logout', (req,res) => {
  res.send(`<b>${req.query.username} successfully logout.</b>`);
});


app.use('/', router);

app.listen(process.env.PORT || 8282, () =>{
    console.log('Web Server is listening at port '+ (process.env.PORT || 8282))
})
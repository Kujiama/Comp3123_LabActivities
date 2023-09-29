// USE POSTMAN FOR POSTING REQUEST

var express = require("express");
const app = express();
const port = 8282;

app.use(express.json())

// GET Request
app.get("/hello" ,(req, res) =>{
    res.send("Hello I am using Express Javascript");
});

// query string: http://localhost:8282/user?firstName=England&lastName=Pelenio
app.get("/user" , (req,res) =>{
    let firstName = req.query.firstName , lastName = req.query.lastName;
    res.json({firstName,lastName});
});

// POST Request using path parameters 
// http://localhost:8282/user/England/Pelenio
app.post("/user/:firstName/:lastName", (req,res) => {
    // destructure the request parameters 
    let firstName = req.params.firstName, lastName = req.params.lastName;
    // JSON response
    res.json({ firstName, lastName });

});

app.listen(port, () =>{
    console.log(`App is running on port:${port}`);
})
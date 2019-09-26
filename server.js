const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get('/colors', (req, res) =>{
    res.send(['red', 'green', 'blue', 'white'])
});

// app.get("/details",(req, res)=>{
//     console.log(req.query);
//     res.send(
//         `hi ${req.query.fullname} your <strong>${req.query.subject}</strong> form has been submitted`
//     );
// })

// app.get("/dagreen",(req, res) => {
//     console.log(req.query);
//     res.send(
//         `hi ${req.query.fullname} your <strong>${req.query.subject}</strong> form has been submitted`
//     );
// });
app.post("/signin", (req, res) => {
    // console.log(req.body);
    // res.send(`Username is ${req.body.username} and password is ${req.body.password}`);
    if(req.body.username === "kings" && req.body.password ==="cc33"){
        res.send("login suscessfull")
    }else{
        res.send("password or username incorrect")
    } console.log(req.body)
});





app.use("*", (req, res)=> {
    res.status(404).send("<h1>404, page not found</h1>");
});
app.listen(3000, () => {
    console.log("Server running at port 3000")
});

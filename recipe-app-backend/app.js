const express = require('express');

const app  = express();
const PORT = 5000;



app.listen( PORT , (error) => {
    if(!error)
        console.log("Server is running successfully on port" + PORT)
    else    console.log("error Occured", error)
});
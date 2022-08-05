const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

function runServer() {
    app.get('/logo', (req,res) => {
        res.sendFile(path.join(__dirname, '/icons/logo.png'));
    })

    app.get('/first-block', (req,res) => {
        console.log('first-block');
        res.sendFile(path.join(__dirname, '/images/first-block.jpg'));
    })

    const port = 5000;
    app.listen(port, ()=> console.log("Server Running on port : ", port));
}

runServer();
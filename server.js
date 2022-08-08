const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

function runServer() {
    //good
    app.get('/logo', (req,res) => {
        res.sendFile(path.join(__dirname, '/icons/logo.png'));
    })

    app.get('/background', (req,res) => {
        console.log('background');
        res.sendFile(path.join(__dirname, '/images/background.jpg'));
    })

    //temp
    app.get('/first-block-icon', (req,res) => {
        console.log('first-block-icon');
        res.sendFile(path.join(__dirname, '/images/mira-intro-icon.png'));
    })

    //good
    app.get('/dex', (req,res) => {
        console.log('dex');
        res.sendFile(path.join(__dirname, '/images/cbpro.png'));
    })

    

    const port = 5000;
    app.listen(port, ()=> console.log("Server Running on port : ", port));
}

runServer();
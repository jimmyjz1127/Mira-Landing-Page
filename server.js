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

    //good
    app.get('/dex', (req,res) => {
        console.log('dex');
        res.sendFile(path.join(__dirname, '/images/cbpro.png'));
    })

    app.get('/pontem-logo', (req,res) => {
        console.log('pontem logo');
        res.sendFile(path.join(__dirname, '/images/pontem-logo.png'));
    })


    const port = 5000;
    app.listen(port,()=> console.log("Server Running on port : ", port));
    // app.listen(port, '127.0.0.1', onServerListening);
}

runServer();
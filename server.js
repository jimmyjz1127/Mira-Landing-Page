const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

function runServer() {
    app.use('/public', express.static(__dirname + "/public"));

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

    app.get('secure', (req,res) => {
        console.log('chain icon');
        res.sendFile(path.join(__dirname, '/icons/chain.png'));
    })

    app.get('defi', (req,res) => {
        console.log('defi icon');
        res.sendFile(path.join(__dirname, '/icons/defi.png'));
    })

    app.get('decentralized', (req,res) => {
        console.log('decentralized icon');
        res.sendFile(path.join(__dirname, '/icons/decentralized.png'));
    })


    

    const port = 5000;
    app.listen(port, ()=> console.log("Server Running on port : ", port));
}

runServer();
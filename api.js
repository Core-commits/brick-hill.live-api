const express = require('express'),
app = express(),
fetch = require('node-fetch');

var forums = "";

setInterval(function() {
    fetch('https://cors.mixerno.space/https://www.brick-hill.com/forum/', {
        headers: {
            'origin': 'null'
        }
    }).then(res => res.text()).then(data => {
        forums = data;
    })
}, 5000);

app.get('/forums', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(forums);
})
const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
  });
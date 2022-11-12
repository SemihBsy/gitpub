require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const drinks = require("./models/drinks");
const food = require("./models/food");

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
});

app.get('/menu', (req, res) => {
    res.render("menu_index.ejs", {
        drinks: drinks,
        food: food
    })
});

app.get('/drinks/:id', (req, res) => {
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.id],
        index: req.params.id
    })
});

app.get('/food/:id', (req, res) => {
    res.render('food_show.ejs', {
        food: food[req.params.id],
        index: req.params.id
    })
});    

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});
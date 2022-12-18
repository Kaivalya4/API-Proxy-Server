const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
require("dotenv").config();

//To get forecast data
router.get("/fore/:city/:state/:country", (req, res) => {
    let city = req.params.city;
    let state = req.params.state;
    let country = req.params.country;

    const WEATHER_API_KEY_ONE = process.env.WEATHER_API_KEY_ONE;

    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${state},${country}&appid=${WEATHER_API_KEY_ONE}&units=metric`;

    fetch(url)
        .then((resp) => resp.json())
        .then((data) => res.send(data));
});

//To get list of cities
router.get("/list/:finalsearch", (req, res) => {
    let city = req.params.finalsearch;

    const WEATHER_API_KEY_ONE = process.env.WEATHER_API_KEY_ONE;

    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${WEATHER_API_KEY_ONE}`;

    fetch(url)
        .then((resp) => resp.json())
        .then((data) => res.send(data));
});

//For reverse geocoding
router.get("/getlocation/:lat/:long", (req, res) => {
    let lat = req.params.lat;
    let long = req.params.long;

    const WEATHER_API_KEY_TWO = process.env.WEATHER_API_KEY_TWO;

    let url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${WEATHER_API_KEY_TWO}`;

    fetch(url)
        .then((resp) => resp.json())
        .then((data) => res.send(data));
});

module.exports = router;

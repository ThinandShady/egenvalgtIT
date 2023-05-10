    // Calling the packages that we need
    const express = require("express");
    const app = express();
    const port = 3000;
    const bp = require("body-parser");
    const qr = require("qrcode");

    // Using the ejs (Embedded JavaScript templates) as our template engine
    // and call the body parser  - middleware for parsing bodies from URL
    //                           - middleware for parsing json objects

    app.set("view engine", "ejs");
    app.use(bp.urlencoded({ extended: false }));
    app.use(bp.json());

    // Simple routing to the index.ejs file
    app.get("/", (req, res) => {
        res.render("index");
    });

    // Blank input
    // Incase of blank in the index.ejs file, return error 
    // Error  - Empty Data!
    app.post("/scan", (req, res) => {
        let url = req.body.url;
        const choices = req.body.myChoices || {};
        url = url + choices
        console.log(choices) 

        if (url.length === 0) res.send("Empty Data!");
        qr.toDataURL(url, (err, src) => {
            if (err) res.send("Error occured");

            res.render("scan", { src });
        });
        function urlGen(url){
            let base = "http://localhost:3000/"

        }
    });


    app.get("/rating", (req, res) => {
        res.render("ratingemoji");
    });

    app.get("/rating1", (req, res) => {
        res.render("ratingterning");
    });

    app.get("/rating2", (req, res) => {
        res.render("ratingentilti");
    });

    app.listen(port, () => console.log("Server at 3000"));

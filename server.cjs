const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));
const port = process.env.PORT || 5000;
app.listen(port);

app.get("/", (req, res) => {
    res.status(200).render("index");
});

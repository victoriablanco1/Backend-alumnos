
const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const alumnosController = require("./controllers/alumnosControllers");


alumnosController(app);

const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
});

module.exports = app;

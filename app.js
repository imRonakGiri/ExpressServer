const port = process.env.PORT || 8080;

const express = require("express");

const app = express();

app.use(express.static("static"));

app.listen(port, () => console.log(`port ${port} is Now Running...`));
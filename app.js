const port = process.env.PORT || 3000;
import express from "express";
const app = express();
app.use(express.static("static"));

app.listen(port, () => console.log(`port ${port} is Now Running...`));

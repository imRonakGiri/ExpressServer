const port = process.env.PORT || 3000;
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("hey Ronak Goswami I'm Your Own Coded Express Server ...");
});

app.listen(port, () => console.log(`port ${port} is Now Running...`));

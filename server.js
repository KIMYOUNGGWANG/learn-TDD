const express = require("express");
const productRouter = require("./routes");
const PORT = 8000;

const app = express();
app.get("/", (req, res) => {
  res.send("asdasdasd World");
});

app.listen(PORT);
app.use("/api/products", productRouter);
console.log("connect");

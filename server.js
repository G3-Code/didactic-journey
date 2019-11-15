const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const PORT = 4000;

const server = express();
server.use(express.json());
server.use(fileUpload());
server.use(cors());
let products = [];
let nextProd = products.length;

server.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});

server.post("/product", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  nextProd++;
  res.status(200).json(products);
});

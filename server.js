const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const PORT = 4000;

const server = express();
server.use(express.json());
server.use(fileUpload());
server.use(cors());

server.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});

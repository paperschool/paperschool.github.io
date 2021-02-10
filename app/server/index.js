const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express()

const PORT = 3000;

const documentLocation = path.resolve(__dirname,"../../docs/index.html");

app.use(express.static(path.dirname(documentLocation)))
app.use(express.static(path.resolve(path.dirname(documentLocation),"docs")))

app.get("*", (req,res) => {
    const document = fs.readFileSync(documentLocation,"utf-8");
    res.send(document);
})

app.listen(PORT,() => {
    console.log(`Listening on Port ${PORT}`)
    console.log(`Navigate to http://localhost:${PORT}`)
})
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
/* app.use(cors({
    origin: "http://meuapp.com"
})); */
app.use(express.json());
app.use(routes);



app.listen(3333);

// Para iniciar o servidor Node.js pelo terminal: 
// node index.js
// Ctrl + C para parar a execução do servidor Node.js
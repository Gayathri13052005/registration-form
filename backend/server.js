const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./mongoose/db');
const app = express();
const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));
app.use(bodyParser.json());


// ✅ Add this route here:
app.get("/", (req, res) => {
    res.send("API is running. Frontend is separate.");
  });
  


const routes = require('./routers/index');
app.use('/', routes);

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server listening at http://${HOSTNAME}:${PORT}`);
});

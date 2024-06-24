const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const leadRoutes = require('./routes/leadRoutes');


const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors());

app.get('/api',(req,res) => {
    res.send('<h4>Api is running...</h4>');
});
app.use('/api',leadRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
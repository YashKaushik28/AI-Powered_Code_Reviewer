const express = require('express');
const aiRoutes = require('./routes/ai.route');
const cors = require('cors');
const app = express();

app.use(cors());   
app.use(express.json());  // Middleware to parse JSON (use of req.body)

app.get('/', (req, res)=>{
    res.send('Hello World');
})

app.use('/ai', aiRoutes);

module.exports = app;
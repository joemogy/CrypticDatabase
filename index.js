const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/CrypticDatabase', { useNewUrlParser: true, useUnifiedTopology: true })

    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');

});
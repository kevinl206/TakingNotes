const express = require('express');

const path = require('path');
const fs = require('fs');

// Set PORT
const PORT = process.env.PORT || 3001;

// Initialize our app variable by setting it to the value of express()
const app = express();

//Direct Server to route files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));


//Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.static('public'))
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"))
});

//Listener
app.listen(PORT, () =>  {
    console.log(`Server listening on port http://localhost:${PORT}`)
});
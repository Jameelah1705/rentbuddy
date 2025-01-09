const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Set the views folder path
app.set('views', path.join(__dirname, 'views'));

// Define static folder for assets like CSS and JS
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
    res.render('home');
});

// Find a buddy route
app.get('/find_a_buddy', (req, res) => {
    res.render('find_a_buddy');
});

// Features route
app.get('/features', (req, res) => {
    res.render('features');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

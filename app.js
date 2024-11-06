const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Debugging middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`Method: ${req.method}, URL: ${req.url}`);
    next();
});

// Route to serve the HTML form
app.get('/', (req, res) => {
    console.log('Serving index.html'); // Log when serving the form
    res.sendFile(path.join(__dirname, '/index.html'));
});

// Route to handle form submission via POST
app.post('/submit-form', (req, res) => {
    console.log(req.body); // Log the POST request body
    const username = req.body.username;
    res.send(`Username is ${username}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

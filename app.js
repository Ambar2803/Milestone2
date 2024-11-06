// Import express to make a server
const express = require('express');
const app = express();  // Create an express app
const port = 3000;  // Set the port where the server will run
const path = require('path');  // Use path to work with file paths

// Use express to handle form data
app.use(express.urlencoded({ extended: true }));

// When someone visits the homepage ('/'), show them the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));  // Send the index.html file
});

// Handle the form submission when the form is submitted
app.post('/submit-form', (req, res) => {
    const username = req.body.username;  // Get the username from the form data
    res.send(`Username is ${username}`);  // Send a response with the username
});

// Start the server and listen on the set port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);  // Log that the server is running
});

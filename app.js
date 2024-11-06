// Importing the express module
const express = require('express');

// Creating an express app instance
const app = express();

// Define the port the server will run on
const port = 3000;

// Middleware to parse form data (URL-encoded)
app.use(express.urlencoded({ extended: true }));

// Route to serve the index.html form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route to handle form submissions
app.post('/submit-form', (req, res) => {
    const username = req.body.username;  // Capture the username from form data
    res.send(`Username is ${username}`);  // Send the username back to the client
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

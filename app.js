const express = require('express');
const app = express();
const port = 3000;
const path = require('path'); // Add this to use __dirname with path

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Route to serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html')); // Using path.join for cross-platform compatibility
});

// Route to handle form submission via POST
app.post('/submit-form', (req, res) => {
    const username = req.body.username;
    res.send(`Username is ${username}`); // Correct string interpolation
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

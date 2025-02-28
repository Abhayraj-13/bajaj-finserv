const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestAlphabet = alphabets.length ? [alphabets.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()))[0]] : [];

    res.json({
        "is_success": true,
        "user_id": "abhayraj_13022003",
        "email": "abhay_raj@srmap.edu.in",
        "roll_number": "AP21110010623",
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_alphabet": highestAlphabet
    });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({ "operation_code": 1 });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// API Route - Matches the logic in api/chat.js
app.post('/api/chat', async (req, res) => {
    const { contents } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;
    const model = 'gemini-2.5-flash';
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    if (!apiKey) {
        return res.status(500).json({ error: { message: 'GEMINI_API_KEY is not defined in .env' } });
    }

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents })
        });

        const data = await response.json();
        
        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        res.json(data);
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ error: { message: 'Failed to communicate with AI' } });
    }
});

app.listen(PORT, () => {
    console.log(`\n🚀 Chatbot server running at: http://localhost:${PORT}`);
    console.log(`📁 Serving files from: ${__dirname}\n`);
});

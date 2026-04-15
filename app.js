const express = require('express');
const app = express();
const PORT = 3000;

// Root Endpoint
app.get('/', (req, res) => {
    res.status(200).json({ "message": "API is running" });
});

// Health Endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ "message": "healthy" });
});

// Personal Info Endpoint (REPLACE WITH YOUR ACTUAL DETAILS)
app.get('/me', (req, res) => {
    res.status(200).json({
        "name": "Blessing Benedicta Bill", 
        "email": "benedictabill20@gmail.com",
        "github": "https://github.com/BlessingbillCloudify"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running internally on port ${PORT}`);
});

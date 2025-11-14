    const express = require('express');
    const cors = require('cors'); // If using CORS
    const bodyParser = require('body-parser'); // If using body-parser

    const app = express();
    const PORT = process.env.PORT || 5000; // Or any preferred port

    // Middleware
    app.use(cors()); // If using CORS
    app.use(bodyParser.json()); // To parse JSON request bodies

    // Define a basic route
    app.get('/', (req, res) => {
      res.send('Hello from the Node.js backend!');
    });

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
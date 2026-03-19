const express = require('express');
const path = require('path');
const app = express();
const port = 8004;

// Serve static files from current directory
app.use(express.static(path.join(__dirname, '.')));

// If running directly, start the server
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

module.exports = app;

/**
 * @fileoverview Main server entry point for Algorithm Simulations Suite.
 * This server serves the static algorithm visualizations.
 */

const express = require('express');
const path = require('path');

/**
 * Express application instance.
 * @type {import('express').Express}
 */
const app = express();

/**
 * Port number for the server.
 * @type {number}
 */
const port = 8004;

// Serve static files from current directory
app.use(express.static(path.join(__dirname, '.')));

/**
 * Starts the server if the script is run directly.
 */
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

module.exports = app;

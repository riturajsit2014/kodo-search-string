'use strict';
// Installed packages
const express = require('express');
const router = express.Router();
// Requiring internal module
const internalModules = require('../modules');

/**
 * Get route for searching the string
 * API route: /search
 * Type: GET
 * Body: JSON, e.g: {strig: "the king"}
 */
router.get('/search', async(req, res, next) => {
    try {
        const searchResult = internalModules.searchInArray(req.body.string);
        res.send(searchResult);
    } catch(err) {
        res.send({error: err.message});
    }
});

module.exports = router;
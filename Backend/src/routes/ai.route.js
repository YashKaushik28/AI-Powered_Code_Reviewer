const express = require('express');
const aiController = require('../controllers/ai.controller');

const Router = express.Router();

Router.post('/get-review', aiController.getReview);

module.exports = Router;
const express = require('express');
const router = express.Router();
const leadsController = require('../controllers/leadController');

router.post('/create-lead', leadsController.createLead);
router.get('/all-leads', leadsController.getAllLeads);

module.exports = router;
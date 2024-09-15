const express = require('express');
const router = express.Router();
const {createAccount, getAccounts, updateAccount, deleteAccount} = require('../controllers/accountController');
const { addBatch } = require('../controllers/batchController');


router.post('/', createAccount);
router.post('/', addBatch);
router.get('/', getAccounts);
router.patch('/:id', updateAccount);
router.delete('/:id', deleteAccount);

module.exports = router;
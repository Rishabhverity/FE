const express = require('express');
const { getBatches, addBatch, updateBatch, deleteBatch } = require('../controllers/batchController');
const router = express.Router();

router.get('/', getBatches);
router.post('/', addBatch);
router.put('/:id', updateBatch);
router.delete('/:id', deleteBatch);

module.exports = router;

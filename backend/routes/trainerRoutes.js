const express = require('express');
const { createTrainer, getTrainers, updateTrainer, deleteTrainer } = require('../controllers/trainerController');
const router = express.Router();


router.post('/', createTrainer);
router.get('/', getTrainers);
//router.get('/:id', getTrainer);
router.patch('/:id', updateTrainer);
router.delete('/:id', deleteTrainer);

module.exports = router;

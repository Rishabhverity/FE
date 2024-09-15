
const Trainer = require('../models/trainer');

// Create a new trainer
const createTrainer =  async (req, res) => {
  try {
    const newTrainer = new Trainer(req.body);
    const savedTrainer = await newTrainer.save();
    res.status(201).json(savedTrainer);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create trainer' });
  }
};

// Get all trainers
const getTrainers =  async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.status(200).json(trainers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get trainers' });
  }
};

// Update a trainer by ID
const updateTrainer =  async (req, res) => {
  try {
    const updatedTrainer = await Trainer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTrainer);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update trainer' });
  }
};

// Delete a trainer by ID
const deleteTrainer =  async (req, res) => {
  try {
    await Trainer.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Trainer deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete trainer' });
  }
};

module.exports = {
    createTrainer,
    getTrainers,
    updateTrainer,
    deleteTrainer
};

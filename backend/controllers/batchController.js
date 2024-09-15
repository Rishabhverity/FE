const Batch = require('../models/batch');
const Account = require('../models/account');

// Get all batches
const getBatches = async (req, res) => {
  const batches = await Batch.find();
  res.json(batches);
};

// Add new batch
const addBatch = async (req, res) => {
  try {
    const { clientName, email, date, timeOfClass, trainerAssigned } = req.body;

    // Ensure all required fields are present
    if (!clientName || !email || !date || !timeOfClass || !trainerAssigned) {
      return res.status(400).send('Missing required fields');
    }

    // Create a new batch
    const newBatch = new Batch({
      clientName,
      email,
      date,
      timeOfClass,
      trainerAssigned,
    });

    const savedBatch = await newBatch.save();

    // Create a new account entry
    const newAccount = new Account({
      Name: clientName,
      date: new Date(date),
      paidOrNot: false,
      FeeOverdueDuration: 0,
      invoice: null,
      purchaseOrder: null,
    });

    const savedAccount = await newAccount.save();

    res.status(201).json({ savedBatch, savedAccount });
  } catch (error) {
    console.error("Error creating batch and account:", error.message); // Log the error
    res.status(500).send('Server error');
  }
}

// Update batch
const updateBatch = async (req, res) => {
  const { id } = req.params;

  // // Check if the id is a valid ObjectId
  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //       return res.status(400).json({ message: 'Invalid ID format' });
  //  }  

  const updatedBatch = await Batch.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedBatch);
};

// Delete batch
const deleteBatch = async (req, res) => {
  const { id } = req.params;
  await Batch.findByIdAndDelete(id);
  res.json({ message: 'Batch deleted' });
};

module.exports = { getBatches, addBatch, updateBatch, deleteBatch };

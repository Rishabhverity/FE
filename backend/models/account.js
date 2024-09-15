const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },

  feePaid: {
    type: Boolean,
    required: true,
  },

  FeeOverdueDuration: {
    type: Number,
  },

  invoice: {
    data: Buffer,
    contentType: String, // To store file type (e.g., 'application/pdf')
  },
  purchaseOrder: {
    data: Buffer,
    contentType: String, // To store file type (e.g., 'application/pdf')
  },
});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;

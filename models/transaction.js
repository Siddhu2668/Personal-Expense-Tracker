const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  type: { type: String, required: true },  // income or expense
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  description: { type: String }
});

module.exports = mongoose.model('Transaction', transactionSchema);

const mongoose = require('mongoose');

/**
 * device model schema.
 */
const deviceSchema = new mongoose.Schema({
  uid: { type: Number, required: true },
  vendor: { type: String, required: true },
  status: {
    type: String,
    enum: ['online', 'offline'],
    default: 'offline',
    required: true,
  },
  gateway: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gateway',
  },
});

module.exports = mongoose.model('Device', deviceSchema);

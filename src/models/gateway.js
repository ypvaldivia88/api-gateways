const mongoose = require('mongoose');

/**
 * gateway model schema.
 */
const gatewaySchema = new mongoose.Schema({
  serial: { type: String, required: true },
  name: { type: String, required: true },
  ipv4: { type: String },
  description: { type: String },
  devices: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Device',
    },
  ],
});

module.exports = mongoose.model('Gateway', gatewaySchema);

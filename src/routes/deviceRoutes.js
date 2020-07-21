'use strict';

module.exports = function (device) {
  var deviceController = require('../controllers/deviceController');

  // deviceController Routes
  device
    .route('/devices')
    .get(deviceController.list)
    .post(deviceController.create);

  device
    .route('/devices/:id')
    .get(deviceController.read)
    .put(deviceController.update)
    .delete(deviceController.delete);
};

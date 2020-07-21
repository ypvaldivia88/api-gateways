'use strict';

module.exports = function (gateway) {
  var gatewayController = require('../controllers/gatewayController');

  // gatewayController Routes
  gateway
    .route('/gateways')
    .get(gatewayController.list)
    .post(gatewayController.create);

  gateway
    .route('/gateways/:id')
    .get(gatewayController.read)
    .put(gatewayController.update)
    .delete(gatewayController.delete);
};

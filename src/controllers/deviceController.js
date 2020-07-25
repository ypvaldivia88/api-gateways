'use strict';

var Device = require('../services/device.service');
var Gateway = require('../services/gateway.service');

module.exports.list = function (req, res) {
  Device.list(function (err, device) {
    if (err) return res.send(err);
    res.json(device);
  });
};

module.exports.create = (req, res) => {
  var new_device = req.body;
  if (!new_device.uid)
    return res
      .status(400)
      .send({ error: true, message: 'Path `uid` is required' });
  if (!new_device.vendor)
    return res
      .status(400)
      .send({ error: true, message: 'Path `vendor` is required' });
  if (!new_device.gateway)
    return res
      .status(400)
      .send({ error: true, message: 'Path `gateway` is required' });

  Gateway.getDevices(new_device.gateway, (err, devicesInGateway) => {
    if (err) return res.send(err);
    if (!devicesInGateway.length < 10) {
      return res.status(400).send({
        error: true,
        message: 'Maximun limit of devices for this gateway',
      });
    } else {
      Device.create(new_device, (err, device) => {
        if (err) return res.send(err);
        res.json(device);
      });
    }
  });
};

module.exports.read = function (req, res) {
  Device.getById(req.params.id, function (err, device) {
    if (err) return res.send(err);
    res.json(device);
  });
};

module.exports.update = function (req, res) {
  Device.update(req.params.id, req.body, function (err, device) {
    if (err) return res.send(err);
    res.json(device);
  });
};

module.exports.delete = function (req, res) {
  Device.delete(req.params.id, function (err) {
    if (err) return res.send(err);
    res.json({ message: 'Device deleted correctly' });
  });
};

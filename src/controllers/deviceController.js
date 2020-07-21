'use strict';

var Device = require('../services/device.service');

exports.list = function (req, res) {
  Device.list(function (err, device) {
    if (err) return res.send(err);
    res.json(device);
  });
};

exports.create = function (req, res) {
  var new_device = req.body;
  if (!new_device.uid)
    return res
      .status(400)
      .send({ error: true, message: 'Path `uid` is required' });
  if (!new_device.vendor)
    return res
      .status(400)
      .send({ error: true, message: 'Path `vendor` is required' });
  Device.create(new_device, function (err, device) {
    if (err) return res.send(err);
    res.json(device);
  });
};

exports.read = function (req, res) {
  Device.getById(req.params.id, function (err, device) {
    if (err) return res.send(err);
    res.json(device);
  });
};

exports.update = function (req, res) {
  Device.update(req.params.id, req.body, function (err, device) {
    if (err) return res.send(err);
    res.json(device);
  });
};

exports.delete = function (req, res) {
  Device.remove(req.params.id, function (err) {
    if (err) return res.send(err);
    res.json({ message: 'Device eliminada correctamente' });
  });
};

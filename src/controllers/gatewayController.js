'use strict';

var Gateway = require('../services/gateway.service');

exports.list = function (req, res) {
  Gateway.list(function (err, gateway) {
    if (err) return res.send(err);
    res.json(gateway);
  });
};

exports.create = function (req, res) {
  var new_gateway = req.body;
  if (!new_gateway.serial)
    return res
      .status(400)
      .send({ error: true, message: 'Path `serial` is required' });
  if (!new_gateway.name)
    return res
      .status(400)
      .send({ error: true, message: 'Path `name` is required' });
  Gateway.create(new_gateway, function (err, gateway) {
    if (err) return res.send(err);
    res.json(gateway);
  });
};

exports.read = function (req, res) {
  Gateway.getById(req.params.id, function (err, gateway) {
    if (err) return res.send(err);
    res.json(gateway);
  });
};

exports.update = function (req, res) {
  Gateway.update(req.params.id, req.body, function (err, gateway) {
    if (err) return res.send(err);
    res.json(gateway);
  });
};

exports.delete = function (req, res) {
  Gateway.remove(req.params.id, function (err) {
    if (err) return res.send(err);
    res.json({ message: 'Gateway eliminada correctamente' });
  });
};

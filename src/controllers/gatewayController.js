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
  if (!new_gateway.ipv4 || !ValidateIPaddress(new_gateway.ipv4)) {
    return res.status(400).send({
      error: true,
      message: 'Path `ipv4` is required and needs to be a valid ipv4 address',
    });
  }
  Gateway.create(new_gateway, function (err, gateway) {
    if (err) return res.send(err);
    res.json(gateway);
  });
};

function ValidateIPaddress(ipaddress) {
  return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
    ipaddress
  );
}

exports.read = function (req, res) {
  Gateway.read(req.params.id, function (err, gateway) {
    if (err) return res.send(err);
    res.json(gateway);
  });
};

exports.getDevices = function (req, res) {
  Gateway.getDevices(req.params.id, function (err, gateway) {
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
  Gateway.delete(req.params.id, function (err) {
    if (err) return res.send(err);
    res.json({ message: 'Gateway deleted correctly' });
  });
};

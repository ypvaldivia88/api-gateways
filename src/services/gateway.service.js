const gateway = require('../models/gateway');

module.exports.list = async function (result) {
  await gateway
    .find({})
    .populate('devices')
    .exec(function (err, res) {
      if (err) throw new Error(err.message);
      console.log(res);
      result(null, res);
    });
};

module.exports.read = async function (id, result) {
  await gateway.findById(id, function (err, res) {
    if (err) throw new Error(err.message);
    result(null, res);
  });
};

module.exports.getDevices = async function (id, result) {
  await gateway.findById(id, function (err, res) {
    if (err) throw new Error(err.message);
    result(null, res);
  });
};

module.exports.create = async (newModel, result) => {
  await gateway.create(newModel, (err, res) => {
    if (err) throw new Error(err.message);
    result(null, res);
  });
};

module.exports.update = async function (id, alteredModel, result) {
  await gateway.findByIdAndUpdate(id, alteredModel, (err, res) => {
    if (err) return result(err, null);
    result(null, res);
  });
};

module.exports.delete = async function (id, result) {
  await gateway.findByIdAndDelete(id, function (err, res) {
    if (err) throw new Error(err);
    result(null, res);
  });
};

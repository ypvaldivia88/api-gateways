const device = require('../models/device');

module.exports.list = async function (result) {
  await device.find(function (err, res) {
    if (err) throw new Error(err.message);
    console.log(res);
    result(null, res);
  });
};

module.exports.read = async function (id, result) {
  await device.findById(id, function (err, res) {
    if (err) throw new Error(err.message);
    result(null, res);
  });
};

module.exports.create = async (newModel, result) => {
  await device.create(newModel, (err, res) => {
    if (err) throw new Error(err.message);
    result(null, res);
  });
};

module.exports.update = async function (id, alteredModel, result) {
  await device.findByIdAndUpdate(id, alteredModel, (err, res) => {
    if (err) return result(err, null);
    result(null, res);
  });
};

module.exports.delete = async function (id, result) {
  await device.findByIdAndDelete(id, function (err, res) {
    if (err) throw new Error(err);
    result(null, res);
  });
};

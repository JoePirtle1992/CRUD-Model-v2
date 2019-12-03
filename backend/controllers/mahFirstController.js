const Location = require("../models/Location");

exports.getEmAll = async (req, res) => {
  try {
    const everyBody = await Location.find();
    res.status(200).json({ message: "Everybody", data: everyBody });
  } catch (err) {
    res.status(404).json({ message: "Found nobody" });
  }
};
exports.getOne = async (req, res) => {
  try {
    const onlyOne = await Location.findById(req.params.id);
    res.status(200).json({ message: "Only One", data: onlyOne });
    //You can get properties by doing onlyOne.name or onlyOne.description
  } catch (err) {
    res.status(404).json({ message: "Found NO ONE", data: null });
  }
};
exports.addOne = async (req, res) => {
  try {
    const newOne = await Location.create(req.body);
    // newOne.save();
    res.status(200).json({ message: "Added someone!", newOne });
  } catch (err) {
    res.status(404).json({ message: "ADDED NO ONE" });
  }
};
exports.updateOne = async (req, res) => {
  try {
    const updateIt = await Location.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "UPDATED someone!", data: updateIt });
  } catch (err) {
    res.status(404).json({ message: "DID NOT ADD NO ONE" });
  }
};
exports.deleteOne = async (req, res) => {
  try {
    const killEm = await Location.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "TERMINATED!!!" });
  } catch (err) {
    res.status(404).json({ message: "KILLED NOBODY" });
  }
};

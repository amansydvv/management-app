const Item = require("../models/Item");

// ADD
exports.addItem = async (req, res) => {
  try {
    const item = await Item.create({
      ...req.body,
      user: req.user.id
    });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL
exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

// GET BY ID
exports.getItemById = async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
};

// UPDATE
exports.updateItem = async (req, res) => {
  const item = await Item.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(item);
};

// DELETE
exports.deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};

// SEARCH
exports.searchItems = async (req, res) => {
  const items = await Item.find({
    itemName: { $regex: req.query.name, $options: "i" }
  });
  res.json(items);
};
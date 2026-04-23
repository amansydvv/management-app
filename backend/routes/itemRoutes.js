const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  addItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
  searchItems
} = require("../controllers/itemController");

router.post("/items", auth, addItem);
router.get("/items", getItems);
router.get("/items/search", searchItems);
router.get("/items/:id", getItemById);
router.put("/items/:id", auth, updateItem);
router.delete("/items/:id", auth, deleteItem);

module.exports = router;
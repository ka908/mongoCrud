const express = require("express");
const router = express.Router();
const {
  addUser,
  getUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../handlers/userhandlers");

router.get("/", async (req, res) => {
  const data = await getUser();
  return res.json({ msg: data });
});
router.get("/user/:id", async (req, res) => {
  const data = await getUserById(req.params.id);
  return res.json({ msg: data });
});
router.put("/user/:id", async (req, res) => {
  const data = await updateUserById(req.params.id, req.body);
  return res.json({ msg: data });
});
router.delete("/user/:id", async (req, res) => {
  const data = await deleteUserById(req.params.id);
  return res.json({ msg: data });
});

router.post("/add", async (req, res) => {
  const data = await addUser(req.body);
  return res.json({ msg: data });
});

module.exports = router;

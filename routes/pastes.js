const express = require("express");
const Paste = require("../models/paste");
const router = express();

router.get("/:pasteId", async (req, res) => {
  const pasteId = req.params.pasteId;
  try {
    let paste = await Paste.findById(pasteId);
    if (paste) {
      return res.send(paste);
    } else {
      return res.send("No Paste Found");
    }
  } catch (err) {
    return res.send("Something went wrong, please try again later");
  }
});

router.post("/", async (req, res) => {
  const { html, css, javascript } = req.body;
  console.log(req.body);
  let paste = new Paste({
    html,
    css,
    javascript,
  });

  try {
    paste = await paste.save();
    return res.send(paste);
  } catch (err) {
    return res.send(
      "Something went wrong, check your inputs or try again later"
    );
  }
});

module.exports = router;
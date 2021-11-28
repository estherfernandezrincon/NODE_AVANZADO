const express = require("express");
const router = express.Router();

router.get("/:locale", function (req, res, next) {
  const locale = req.params.locale;
  console.log(locale);
  res.cookie("nodepop", locale, {
    maxAge: 1000 * 60 * 60 * 24 * 60, // 2 meses
  });

  res.redirect(req.get("Referer"));
});

module.exports = router;

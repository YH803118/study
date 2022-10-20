const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send({ test: "h1" });
});

module.exports = router;
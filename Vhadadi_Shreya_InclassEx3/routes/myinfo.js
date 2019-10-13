const express = require("express");
const router = express.Router();

const myInfo = { name: 'Shreya Vhadadi', dateOfBirth: '30/95', hometown: 'Mumbai' }

router.get("/", async(req, res) => {

    res.json(myInfo)
});
module.exports = router;
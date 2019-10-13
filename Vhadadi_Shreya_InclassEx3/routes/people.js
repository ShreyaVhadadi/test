const express = require("express");
const router = express.Router();
const data = require("../data/people");

router.get("/", async(req, res) => {
    const people = await data.getPeople();
    res.json(people);
});

router.get("/:id", async(req, res) => {
    try {
        const person = await data.getPersonById(req.params.id);
        res.json(person);
    } catch (e) {
        res.status(404).json({ message: "not found!" });
    }
});

module.exports = router;
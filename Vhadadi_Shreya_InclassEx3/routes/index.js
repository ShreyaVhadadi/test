const postRoutes = require("./myinfo");
const userRoutes = require("./people");

const constructorMethod = app => {
    app.use("/myinfo", postRoutes);
    app.use("/people", userRoutes);

    app.use("*", (req, res) => {
        res.status(404).json({ error: "Not found" });
    });
};

module.exports = constructorMethod;
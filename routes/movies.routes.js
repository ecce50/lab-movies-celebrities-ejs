// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

router.get("/movie", (req, res) => {
    res.send("Here is my movies route")

});

module.exports = router;
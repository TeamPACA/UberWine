const db = require("../models")
module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Winery.findAll().then(function (wineries) {
            console.log(wineries)
            res.render("index", {
                wineries
            })
        })
        console.log(res)
    });
}
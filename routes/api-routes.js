const db = require("../models");

module.exports = function (app) {

    // Uses passport module to log a user account
    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        res.json(req.user);
    });

    app.post("/api/signupuser", function (req, res) {
        db.Users.create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            })
            .then(function () {
                res.redirect(307, "/api/login");
            })
            .catch(function (err) {
                res.status(401).json(err);
            });
    });
    // WILL NEED TO CONNECT WITH CURRENTLY LOGGED IN ACCOUNT TO SET A "OWNER" FOREIGN KEY VALUE
    app.post("/api/signupwinery", function (req, res) {
        db.Wineries.create({
                wineryname: req.body.wineryname,
                email: req.body.email,
                phone: req.body.phone,
                address: req.body.address,
                postcode: req.body.postcode
                // Need something here that associates who which User account can edit the winery details
            })
            .then(function () {
                res.redirect(307, "/api/login");
            })
            .catch(function (err) {
                res.status(401).json(err);
            });
    });

    // Signs user out
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });

}
// Wineries.create({
//     wineryname: "Alex's Winery",
//     email: "alex@alex.com",
//     phone: "04012121",
//     address: "2, ABC Street",
//     postcode: 5555
// });
// console.log("Alex's auto-generated ID:", alxWine.id);
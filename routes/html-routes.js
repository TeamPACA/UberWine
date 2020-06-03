const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function (app) {

    // GETS the REGISTER page where a user can make an account
    app.get("/", function (req, res) {
        // If the user already has an account send them to the members page (Welcome!.... etc)
        if (req.user) {
            res.redirect("/homepage");
        }
        res.sendFile(path.join(__dirname, "../public/signup.html")); // Prompts for a login, if not logged in most things will redirect here (due to isAuthenicated)
    });

    // GETS the LOGIN page where a user can sign in to an existing account
    app.get("/login", function (req, res) {
        if (req.user) {
            res.redirect("/homepage");
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/homepage", isAuthenticated, function (req, res) {
        res.sendFile(path.join(__dirname, "../public/homepage.html")); // The "Main" page
    });

    app.get("/registerwinery", isAuthenticated, function (req, res) {
        res.sendFile(path.join(__dirname, "../public/registerwinery.html")) // !!!!!!!!!!!!!!!!!!!!!!!!! REGISTER WINERY PAGE HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    })

    app.get("/userpage", isAuthenticated, function (req, res) {
        res.sendFile(path.join(__dirname, "../public/userpage.html")) /// The USERS page (shows user ID and user name and all that jazz)
    })

    app.get("/management", isAuthenticated, function (req, res) {
        res.sendFile(path.join(__dirname, "../public/management.html")) // List event, cancel, add wine, edit wines
    })
}
// app.get("/", function (req, res) {
//     db.wineries.findAll().then(function (wineries) {
//         console.log(wineries)
//         res.render("index", {
//             wineries
//         })
//     })
//     console.log(res)
// });
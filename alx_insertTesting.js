const Wineries = require("./models")

Wineries.create({
    wineryname: "Alex's Winery",
    email: "alex@alex.com",
    phone: "04012121",
    address: "2, ABC Street",
    postcode: 5555
});
console.log("Alex's auto-generated ID:", alxWine.id);

Wineries.create({
    wineryname: "Alvaro's Winery",
    email: "alvar@alvaro.com",
    phone: "04045454",
    address: "17, ABC Street",
    postcode: 5555
});
console.log("Alvaro's auto-generated ID:", alvWine.id);

Winery.findAll()
const Winery = require("./models")

const alxWine = await Winery.create({
    wineryname: "Alex's Winery",
    email: "alex@alex.com",
    phone: "04012121",
    address: "2, ABC Street",
    postcode: 5555
});
console.log("Alex's auto-generated ID:", alxWine.id);

const alvWine = await Winery.create({
    wineryname: "Alvaro's Winery",
    email: "alvar@alvaro.com",
    phone: "04045454",
    address: "17, ABC Street",
    postcode: 5555
});
console.log("Alvaro's auto-generated ID:", alvWine.id);

Winery.findAll()
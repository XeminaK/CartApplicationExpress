"use strict";
const express = require("express");
const cart = express.Router();

const cartItems = [
    {
        id: 1,
        product: "orange",
        price: 2,
        quantity: 3,
    },
    {
        id: 2,
        product: "apple",
        price: 5,
        quantity: 2,
    },
    {
        id: 3,
        product: "carrot",
        price: 4,
        quantity: 3,
    },
    // {
    //     id: 4,
    //     product: "orange",
    //     price: 2,
    //     quantity: 3,
    // },
    // {
    //     id: 5,
    //     product: "apple",
    //     price: 5,
    //     quantity: 2,
    // },
    // {
    //     id: 6,
    //     product: "carrot",
    //     price: 4,
    //     quantity: 3,
    // },
]; //end of cartItems array

cart.get("/cart-items", function(req, res) {
    res.send(cartItems);
    console.log("GET request made");
});


cart.post("/cart-items", function(req, res) {
    console.log(req.body); //this works!
    cartItems.push(req.body); //adding a new item in the cartItems array
    res.send(cartItems);
});

cart.put("/cart-items/:id", function(req, res) {
    for (let i=0; i < cartItems.length; i++) {
        if (cartItems[i].id == req.params.id) {
            cartItems.splice(i, 1, req.body);
            res.send(cartItems);
            break;
        }
    }
    console.log(req.body); //you need to use postman and type in some content into the body to send it
    //For example: {"id": "4", "price": "3","quantity": "2"}
    //select put, enter in /cart-items/2 then hit send, the above code should print in the console
    console.log(req.params.id);
    // res.send(cartItems);  //don't need this now
});

cart.delete("/cart-items/:id", function(req, res) {
    for (let i=0; i < cartItems.length; i++) {
        if (cartItems[i].id == req.params.id) {
            cartItems.splice(i, 1);
            res.send(cartItems);
            break;
        }
    }
    console.log(req.params.id);
});

module.exports = cart;


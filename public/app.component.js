"use strict";
const cart = {
    template: `
    <p class="title">Items in your Shopping Cart!</p>

    <form ng-submit="$ctrl.addItem(newItem)">
    <input id="input1" type="text" placeholder="id" ng-model="newItem.id">
    <input id="input2" type="text" placeholder="product" ng-model="newItem.product">
    <input id="input3" type="text" placeholder="price" ng-model="newItem.price">
    <input id="input4" type="text" placeholder="quantity" ng-model="newItem.quantity">
    <button class="addButton">Add to List</button>
    </form>

    <div class="itemContainer">    
        <section class="shoppingCard" ng-repeat="item in $ctrl.cartItems track by $index">
        <p>Id: {{item.id}} </p>
        <p>Product: {{item.product}} </p>
        <p>Price: $ {{item.price}} </p>
        <p>Quantity: {{item.quantity}} </p>
        <button class="removeButton, material-icons" ng-click="$ctrl.removeItem(item);">clear</button>
        <button class="editButton, material-icons" ng-click="$ctrl.editItem(item, newItem);">create</button>
        </section>
    </div>
    `,
    controller: ["CartService", function(CartService) {
        const vm=this;
        CartService.getAllItems().then(response => {
            vm.cartItems = response.data;
        })
        vm.addItem = function(newItem) {
            CartService.addItem(newItem).then(response => {
                vm.cartItems = response.data;
                document.getElementById("input1").value = "";
                document.getElementById("input2").value = "";
                document.getElementById("input3").value = "";
                document.getElementById("input4").value = "";
            });
        };
        vm.removeItem = function(item) {
            CartService.deleteItem(item).then(response => {
                vm.cartItems = response.data;
                console.log(item);
            })
        };
        vm.editItem = function(item, newItem) {
            CartService.replaceItem(item, newItem).then(response => {
                vm.cartItems = response.data;
            })
        }
    }]
}

angular.module("App").component("cart", cart);
"use strict";
function CartService($http) {
    const self=this;
    self.getAllItems = function() {
        return $http({
            method: "GET",
            url: "/cart-items"
        });
    };
    self.addItem = function(newItem) {
        return $http({
            method: "POST",
            url: "/cart-items",
            data: newItem,
        })
    };
    self.deleteItem = function(item) {
        return $http({
            method: "DELETE",
            url: `/cart-items/${item.id}`
        })
    };
    self.replaceItem = function(item, newItem) {
        return $http({
            method: "PUT",
            url: `/cart-items/${item.id}`,
            data: newItem,
        })
    }
}


angular.module("App").service("CartService", CartService);
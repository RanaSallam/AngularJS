(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var ToBuyList = this;

  ToBuyList.items =  ShoppingListCheckOffService.GetToBuyItems();
  ToBuyList.Message = "Everything is bought!";

  ToBuyList.buyItem = function (itemIdex) {
    ShoppingListCheckOffService.AddBoughtItem(itemIdex);
  };

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var AlreadyBoughtList = this;

  AlreadyBoughtList.items = ShoppingListCheckOffService.GetBoughtItems();
  AlreadyBoughtList.Message = "Nothing bought yet.";
}

function ShoppingListCheckOffService() {
  var service = this;

  // To buy items
  var ToBuyItems = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Cheese",
      quantity: "1"
    }
  ];

  // Bought items
  var BoughtItems = [];

  service.AddBoughtItem = function (itemIdex) {
    BoughtItems.push(ToBuyItems[itemIdex]);
    ToBuyItems.splice(itemIdex, 1);
  };

  service.GetToBuyItems = function () {
    return ToBuyItems;
  };

  service.GetBoughtItems = function () {
    return BoughtItems;
  };  

}

})();

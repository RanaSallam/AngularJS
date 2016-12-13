(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItems);

function FoundItems() {
  var ddo = {
    scope: {
      list: '=myList',
      found: '<',
      onRemove: '&',
    },
    templateUrl: 'loader/itemsloaderindicator.template.html',
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var NarrowItDown = this;

  NarrowItDown.searchTerm = "";
  NarrowItDown.found = [];
  NarrowItDown.errorMsg = "";
  NarrowItDown.flag = 0;

  NarrowItDown.search = function (searchTerm) {
    NarrowItDown.found = [];
    var promise = MenuSearchService.getMatchedMenuItems(NarrowItDown.searchTerm);
    promise.then(function (response) {
      for (var i = 0; i < response.length; i++) {
        NarrowItDown.found.push(response[i]);
      };
    });
    NarrowItDown.flag = 1;
  };

  NarrowItDown.removeItem = function (itemIndex) {
    NarrowItDown.found.splice(itemIndex, 1);
  };

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var foundItems = [];
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    });
      return response.then(function (result) {
        var menu_items = result.data.menu_items;
        foundItems = [];
        for (var i = 0; i < menu_items.length; i++) {
          if (menu_items[i].description.toLowerCase().indexOf(searchTerm) !== -1) {
            foundItems.push(menu_items[i]);
          }
        }
        return foundItems;
      });
  }

}

})();

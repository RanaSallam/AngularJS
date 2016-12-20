(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;

  // List of menu items categories
  var allCategories = [];

  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json"),
    });
    
    return response.then(function (result) {
        for (var i = 0; i < result.data.length; i++) {
          allCategories.push(result.data[i]);
        }
        return allCategories;
    });

  };

  service.getItemsForCategory = function(categoryShortName) {
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName),
    });
    
    return response.then(function (result) {
      return result.data.menu_items;
    });
  }

}

})();

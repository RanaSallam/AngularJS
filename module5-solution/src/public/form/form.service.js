(function () {
"use strict";

angular.module('public')
.service('FormService', FormService);


FormService.$inject = ['$http', 'ApiPath'];
function FormService($http, ApiPath) {
  var service = this;
  var foundItems = [];

  service.sendDish = function (dish) {
    return $http.get(ApiPath + '/menu_items.json').then(function (response) {
      var menuItems = (response.data)['menu_items'];
      for (var i = 0; i < menuItems.length; i++) {
        if (menuItems[i].short_name.toLowerCase() == dish.toLowerCase()) {
          foundItems.push(menuItems[i]);
        }
      }
    });
  }

  service.getFavMenuItem = function () {
    return foundItems;
  }

}



})();

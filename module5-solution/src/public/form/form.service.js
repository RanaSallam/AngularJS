(function () {
"use strict";

angular.module('public')
.service('FormService', FormService);


FormService.$inject = ['$http', 'ApiPath'];
function FormService($http, ApiPath) {
  var service = this;
  service.items;
  var userinfo;

  service.sendUser = function (user) {
    userinfo = user;
  }

  service.sendDish = function (dish) {
    return $http.get(ApiPath + '/menu_items.json').then(function (response) {
      var foundItems;
      var menuItems = (response.data)['menu_items'];
      for (var i = 0; i < menuItems.length; i++) {
        if (menuItems[i].short_name.toLowerCase() == dish.toLowerCase()) {
          foundItems = menuItems[i];
        }
      }
      service.items = foundItems;
      service.dishInfo();
      return foundItems;
    });
  }

  service.getUserInfo = function () {
    return userinfo;
  }

  service.dishInfo = function () {
    if(service.items)
    {
      var shortName = service.items.short_name;
        return $http.get(ApiPath + '/menu_items/'+ shortName +'.json').then(function (response) {
          return response.data;
        });
    }
    else
      return false;
  }

}



})();

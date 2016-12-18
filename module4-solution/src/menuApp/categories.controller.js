(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService', 'allCategories'];
function CategoriesController(MenuDataService, allCategories) {
  var categories = this;
  categories.allCategories = allCategories;
}

})();

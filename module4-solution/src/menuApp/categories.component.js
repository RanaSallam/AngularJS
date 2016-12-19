(function () {
'use strict';

angular.module('data')
.component('categoriesList', {
  templateUrl: 'src/menuApp/templates/allCategoriesList.template.html',
  bindings: {
    allCategories: '<',
  }
});

})();

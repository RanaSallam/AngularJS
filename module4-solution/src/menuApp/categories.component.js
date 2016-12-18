(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuApp/templates/allCategoriesList.template.html',
  bindings: {
    allCategories: '<'
  }
});

})();

(function () {
'use strict';

angular.module('data')
.component('categoryList', {
  templateUrl: 'src/menuApp/templates/allCategoriesList.template.html',
  bindings: {
    category: '<',
  }
});

})();

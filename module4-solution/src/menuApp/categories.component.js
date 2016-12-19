(function () {
'use strict';

angular.module('data')
.component('categoriesList', {
  templateUrl: 'src/menuApp/templates/allCategoriesList.template.html',
  // new template list <ul> loop over allCategories
  bindings: {
    allCategories: '<'
  }
});

})();

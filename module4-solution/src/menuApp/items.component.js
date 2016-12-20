(function () {
'use strict';

angular.module('data')
.component('itemsList', {
  templateUrl: 'src/menuApp/templates/allItemsList.template.html',
  bindings: {
    categoryitems: '<',
  }
});

})();

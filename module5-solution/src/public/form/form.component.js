(function () {
"use strict";

angular.module('public')
.component('signupForm', {
  templateUrl: 'src/public/form/fav-dish.html',
  bindings: {
    favdish: '<'
  }
});

})();

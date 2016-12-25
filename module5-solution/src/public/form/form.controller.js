(function () {
"use strict";

angular.module('public')
.controller('SignupformController', SignupformController);

SignupformController.$inject = ['favDish'];
function SignupformController(favDish) {
  var signup = this;
  signup.favDish = favDish;
  
  signup.submit = function () {
    console.log('TRUE FORM, KINDLY SAVE THE DATA!')
  };
}

})();

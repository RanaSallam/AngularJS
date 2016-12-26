(function () {
"use strict";

angular.module('public')
.controller('SignupformController', SignupformController);

SignupformController.$inject = ['favDish'];
function SignupformController(favDish) {
  var signup = this;
  signup.favDish = favDish;
  signup.user = { firstname: "", lastname: "", email: "", phone: "", dish: ""};
  
  signup.submit = function () {
    console.log('TRUE FORM:', signup.user);
  };
}

})();

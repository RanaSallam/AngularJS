(function () {
"use strict";

angular.module('public')
.component('signupForm', {
  templateUrl: 'src/public/form/fav-dish.html',
  bindings: {
    favdish: '<'
  }
});


// SignupformController.$inject = ['favDish'];
// function SignupformController(favDish) {
//   var signup = this;

//   signup.submit = function () {
//     console.log('TRUE FORM, KINDLY SAVE THE DATA!')
//   };
//   signup.favDish = favDish;
//   // console.log("From controller: " + signup.favDish);
// }

})();

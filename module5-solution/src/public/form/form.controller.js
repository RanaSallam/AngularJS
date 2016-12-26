(function () {
"use strict";

angular.module('public')
.controller('SignupformController', SignupformController);

SignupformController.$inject = ['FormService', 'favDish'];
function SignupformController(FormService, favDish) {
  var signup = this;
  signup.favDish = favDish;
  signup.user = { firstname: "", lastname: "", email: "", phone: "", dish: ""};
  signup.item = [];
  signup.errmsg = '';
  signup.savedmsg = '';
  signup.submit = function () {
  	FormService.sendDish(signup.user.dish);
  };
	console.log('COntroller: ', signup.favDish);
  //  	var promise = FormService.getFavMenuItem(signup.user.dish);
 //  	promise.then(function (response) {
	//   signup.item = response;
 //    });
 //    console.log(signup.item);
 //    console.log(signup.item.length);
 // //  	if(signup.item.length > 0)
	// {
	//     console.log('Wohooo', item);
	// 	signup.savedmsg = 'Your information has been saved';
	// }    
	// else
	// {
	//     console.log('No such menu number exists');
	// 	signup.errmsg = 'No such menu number exists';
	// }
}

})();

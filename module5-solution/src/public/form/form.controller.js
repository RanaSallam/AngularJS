(function () {
"use strict";

angular.module('public')
.controller('SignupformController', SignupformController);

SignupformController.$inject = ['FormService'];
function SignupformController(FormService) {
  var signup = this;
  signup.user = { firstname: "rana", lastname: "sallam", email: "ranasallam@gmail.com", phone: "123-123-1324", dish: "a1"};
  // signup.user = { firstname: "", lastname: "", email: "", phone: "", dish: ""};
  signup.item ;
  signup.errmsg = '';
  signup.savedmsg = '';

  signup.submit = function () {
  	FormService.sendUser(signup.user);
  	var promise = FormService.sendDish(signup.user.dish);
 	promise.then(function (response) {
	  	signup.item = response;
	 	if(signup.item)
		{
			signup.savedmsg = 'Your information has been saved';
		}    
		else
		{
			signup.errmsg = 'No such menu number exists';
		}
    });
 
  };
 
}

})();

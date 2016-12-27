(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['infoData', 'FormService'];
function InfoController(infoData, FormService) {
	var info = this;
	info.infoData = infoData;
	info.flag = false;
	info.dish;
	if(info.infoData)
		info.flag = true;
	var promise =  FormService.dishInfo();
	if(promise){
	    promise.then( function (response) {
	    	var img = ""
	    	info.dish = { 
	    					pic: response.category_short_name,
	    					title: response.name,
	    					description: response.description,
	    				}
	    });
	}
 
}

})();

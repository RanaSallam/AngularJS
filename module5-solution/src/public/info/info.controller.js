(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['infoData', 'FormService'];
function InfoController(infoData, FormService) {
  var info = this;
  info.infoData = infoData;
  console.log('info controller: ',  infoData);
  var promise =  FormService.dishInfo();
  promise.then( function (response) {
  	// console.log('info controller: ',  response);
  });
 
}

})();

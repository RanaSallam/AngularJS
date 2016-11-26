(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.placeholder = "List comma separated dishes you usually have for lunch.";
  $scope.LunchMeal = "";
  $scope.message = "";
  $scope.Note = "Note: We do not consider an empty item, i.e. , , as an item towards to the count.";
  $scope.FontColor = {};
  $scope.boxStyle = {};
  $scope.checkIfTooMuch = function () {
    var meal = $scope.LunchMeal.split([',']);
    var MealNumber = 0;
    for (var i = 0; i < meal.length; i++) {
      if(meal[i].trim().length > 0)
        MealNumber ++;
    };
    if(MealNumber == 0) {
      $scope.message = "Please enter data first";
      $scope.FontColor.style = {"color":"red"};
      $scope.boxStyle.style = {"border-color":"red"};
    }else if(MealNumber <= 3) {
      $scope.message = "Enjoy";
      $scope.FontColor.style = {"color":"green"};
      $scope.boxStyle.style = {"border-color":"green"};
    }else if(MealNumber > 3) {
      $scope.message = "Too much!";
      $scope.FontColor.style = {"color":"green"};
      $scope.boxStyle.style = {"border-color":"green"};
    }

  };

}

})();

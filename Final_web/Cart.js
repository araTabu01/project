var app = angular.module("AddCart", []);
app.controller("AddCartCon", function ($scope) {
	
	$scope.CartList =[];

$scope.CartList = JSON.parse( localStorage.getItem('CartList'));

$scope.Total = JSON.parse( localStorage.getItem('Total'));

$scope.clearCart = function () {
        $scope.cartlist = [];
        
		window.close();
    }

$scope.payment = function ()
{
  alert("your payment has been successfully payed");
	
}
	

});
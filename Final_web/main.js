var app = angular.module("test", []);
app.controller("testCon", function ($scope) {
    $scope.MobileList = [];
    $scope.CartList = [];
    $scope.mobile = {};
    $scope.mobile.Avail = "Avaliable";
    $scope.mobile.Count = 0;
    $scope.Mobiles = [{ BrandId: 1, Brand: "IPhone" }, { BrandId: 2, Brand: "Samsung" }, { BrandId: 3, Brand: "Nokia" }, { BrandId: 3, Brand: "OnePlus" }, { BrandId: 3, Brand: "Asus" }];
    $scope.addMob = function () {
        var temp = Object.assign({}, $scope.mobile);
        if($scope.MobileList.length > 0){
            for (i = 0; i <=$scope.MobileList.length; i++) {
                if ($scope.MobileList[i].Brand == temp.Brand && $scope.MobileList[i].Model == temp.Model) {
                    alert('already Added');
                    break;
                }
                else {
                    $scope.MobileList.push(temp);
                    break;
                }
            }
        }
        else{
            $scope.MobileList.push(temp); 
        }
        $("#sec-page").show();
        
    }
    $scope.removeMob = function (objMobile) {
        var index = $scope.MobileList.indexOf(objMobile)
        $scope.MobileList.splice(index, 1);
    }
    $scope.addCart = function (objMobile) {
		
		
        $scope.updateStock(objMobile);
		
		window.open("file:///C:/Users/Ara Tabasum/Desktop/Final_web/AddCart.html");
		
        
    }
    $scope.updateStock = function (objMobile) {
        
        for (var i = 0; i < $scope.MobileList.length; i++) {
            var product = $scope.MobileList[i];
            if (product.Brand == objMobile.Brand && product.Model == objMobile.Model) {
                if (product.Stock == "Stock Out" || product.Stock < 2) {
                    product.Stock = "Stock Out";
                    product.Avail = "";
                }
                else {
                    $scope.CartList.push(objMobile);
                    product.Stock = objMobile.Stock - 1;
                    $scope.updateCount(objMobile);
                    console.log($scope.getTotal());
                    $scope.mobile.Ttotal = $scope.getTotal();
                }
            }
            else{
                $scope.CartList.push(objMobile);
                product.Stock = objMobile.Stock - 1;
                $scope.updateCount(objMobile);
                console.log($scope.getTotal());
                $scope.mobile.Ttotal = $scope.getTotal();
            }
        }
		localStorage.clear();
		localStorage.setItem("CartList",JSON.stringify($scope.CartList) );
		localStorage.setItem("Total",JSON.stringify($scope.mobile.Ttotal) );
		
		
		
		
    }
    $scope.updateCount = function (objMobile) {
        objMobile.Count = objMobile.Count + 1;
    }
    $scope.clearCart = function () {
        $scope.CartList = [];
        for (var i = 0; i < $scope.MobileList.length; i++) {
            var product = $scope.MobileList[i];
            product.Count = 0;
        }
        $scope.mobile.Ttotal = $scope.getTotal();
    }
    $scope.getTotal = function () {
        var total = 0;
        for (var i = 0; i < $scope.CartList.length; i++) {
            var product = $scope.CartList[i];
            total += product.Price;
        }
        return total;
    }

    $("#sec-page").hide();
	$("#third-page").hide();
	$(".res").hide();
	
	
	
	
	
});



var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function ($scope) {

    $scope.shopList = [];

    $scope.bought = [];

    $scope.addItem = function(){

        if($scope.shopList.length + $scope.bought.length + 1 > 30){
            alert("Numero maximo de itens!!");
            return;
        }

        if (!$scope.item) { return; }

        if ($scope.shopList.indexOf($scope.item) == -1 && $scope.bought.indexOf($scope.item) == -1) {
            $scope.shopList.push($scope.item);
            $scope.item = "";
        } else {
            $scope.errortext = "O item ja esta em uma das listas.";
            alert($scope.errortext);
        }

    }

    $scope.removeItemFromBuyList = function(x){

        if ($scope.shopList.indexOf($scope.shopList[x]) != -1){

            $scope.shopList.splice(x, 1);

        }else{
            alert("Erro!!! Item nao existe em nenhuma das listas");
        }
        
    }

    $scope.removeItemFromBoughtList = function(x){

        if ($scope.bought.indexOf($scope.bought[x]) != -1) {

            $scope.bought.splice(x, 1);

        }else {
            alert("Erro!!! Item nao existe em nenhuma das listas");
        }
    }

    $scope.changeToBoughtList = function(x){

        if ($scope.shopList.indexOf($scope.shopList[x]) != -1) {

            $scope.bought.push($scope.shopList[x]);
            $scope.shopList.splice(x, 1);

        } else {
            alert("Erro!!! Item nao existe em nenhuma das listas");
        }
    }

    $scope.changeToBuyList = function(x){

        if ($scope.bought.indexOf($scope.bought[x]) != -1) {

            $scope.shopList.push($scope.bought[x]);
            $scope.bought.splice(x, 1);

        } else{
            alert("Erro!!! Item nao existe em nenhuma das listas");
        }

    }

    $scope.clearList = function(){

        $scope.bought = [];

    }

});

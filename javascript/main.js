var app = angular.module("Proj3", []); 

app.controller("AnimalCtrl", ($scope) => { 
    $scope.animals = [{ name: 'frog' }, { name: 'zebra' }, { name: 'chimp' }];

});

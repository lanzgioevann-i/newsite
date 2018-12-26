var app = angular.module('appBody', []);
app.controller('WorksController', function($scope, $http){
	$http.get('https://raw.githubusercontent.com/lazygeniuslanz/newsite/master/data/works.json').success(function(data){
		$scope.works = data;
		$(".works-container").css("background-image", data[0].imgSrc);
		
		console.log("WorksController loaded");
	});
});
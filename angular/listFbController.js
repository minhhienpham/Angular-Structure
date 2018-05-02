app.controller("listFbController", function($scope,$http) {
		$http.get('http://localhost:8080/feedbacks').then(function(response){
					console.log(response.data);
					$scope.datas = response.data;
		});
});

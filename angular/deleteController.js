app.controller("fbController", function($scope,$http) {
	$scope.DeleteData = function () {

            var data = $.param({
                email: $scope.email,
                message: $scope.message
            });

            $http.delete('http://localhost:8080/feedbacks' + data)
            .success(function (data, status, headers) {
                $scope.ServerResponse = data;
            })
            .error(function (data, status, header, config) {
                $scope.ServerResponse = htmlDecode("Data: " + data +
                    "\n\n\n\nstatus: " + status +
                    "\n\n\n\nheaders: " + header +
                    "\n\n\n\nconfig: " + config);
            });
        };

		// $http.delete('http://localhost:8080/feedbacks',$scope.model,{        
  // 					headers:{'Content-Type': 'application/json'}}
		// 			).then(function(response){
		// 			if(response.status == 201){
		// 				alert("send feedback success");
		// 			}else{
		// 				alert("send feedback fail");
		// 			}
		// }, (response) => {
		// 	console.log(response);
  //       	alert("Error: "+response.status +" : " +response.statusText);
  //   	});

	}
});

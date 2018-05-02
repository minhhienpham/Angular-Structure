app.controller("fbController", function($scope,$http) {
	$scope.fbSub = function(){
		console.log($scope.model);
		$http.post('http://localhost:8080/feedbacks',$scope.model,{        
  					headers:{'Content-Type': 'application/json'}}
					).then(function(response){
					if(response.status == 201){
						alert("send feedback success");
					}else{
						alert("send feedback fail");
					}
		}, (response) => {
			console.log(response);
        	alert("Error: "+response.status +" : " +response.statusText);
    	});

	}
});

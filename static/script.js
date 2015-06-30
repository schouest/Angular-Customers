var myAppModule = angular.module('myAppModule', ['ngRoute']);


myAppModule.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partial/customers.html'
	})
	.when('/orders', {
		templateUrl: 'partial/orders.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})
      
      myAppModule.factory('customerFactory', function (){
    var customers = [{name: 'Michael Choi', created_at: new Date()},{name:'Martin', created_at: new Date()}];
    var factory = {};
    // add a get method to the object we defined
    factory.getCustomers = function (callback){
        // pass the object to a callback to be used by whoever calls the method
        callback(customers);
    }
    return factory
});

      myAppModule.controller('customersController', function ($scope, customerFactory){
          $scope.customers = [];
          // run the get method and set $scope data in the callback
          customerFactory.getCustomers(function (data){
              $scope.customers = data;
          })
            
      $scope.addCust = function (){
        for (i = 0; i < $scope.customers.length; i++){  //check through list for dupe names
              if($scope.customers[i].name == $scope.newCustomer.name){
                console.log("ERROR: NAME MATCHED");
                $scope.error_txt = 'ERROR: NAME MATCHED';
                return false;
              }
        }
        $scope.newCustomer.addDate = new Date;
		    $scope.customers.push($scope.newCustomer); // add to the array	    
		    $scope.newCustomer = {};// clear the form values
        $scope.error_txt = '';//reset error text
		}

      $scope.removeCust = function (customer){
        $scope.customers.splice($scope.customers.indexOf(customer),1);
    }

      });

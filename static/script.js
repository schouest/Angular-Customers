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
    var customers = [];
    var factory = {};
    // add a get method to the object we defined
    factory.getCustomers = function (callback){
        // pass the object to a callback to be used by whoever calls the method
        callback(customers);
    }
    return factory
});

      myAppModule.controller('customersController', function (customerFactory){
        var that = this;
          that.customers = [];
          // run the get method and set $scope data in the callback
          customerFactory.getCustomers(function (data){
              that.customers = data;
          })
            
      that.addCust = function (){
        for (i = 0; i < that.customers.length; i++){  //check through list for dupe names
              if(that.customers[i].name == that.newCustomer.name){
                console.log("ERROR: NAME MATCHED");
                that.error_txt = 'ERROR: NAME MATCHED';
                return false;
              }
        }
        that.newCustomer.addDate = new Date;
		    that.customers.push(that.newCustomer); // add to the array	    
		    that.newCustomer = {};// clear the form values
        that.error_txt = '';//reset error text
		}

      that.removeCust = function (customer){
        that.customers.splice(that.customers.indexOf(customer),1);
    }

      });



myAppModule.factory('productFactory', function (){
    var products = [];
    var factory = {};
    // add a get method to the object we defined
    factory.getProducts = function (callback){
        // pass the object to a callback to be used by whoever calls the method
        callback(products);
    }
    return factory
});

      myAppModule.controller('productsController', function (productFactory){
        var that = this;
          that.products = [];
          // run the get method and set $scope data in the callback
          productFactory.getProducts(function (data){
              that.products = data;
          })
            
      that.addProd = function (){
        for (i = 0; i < that.products.length; i++){  //check through list for dupe names
              if(that.products[i].pname == that.newProduct.pname
              	&& that.products[i].cname == that.newProduct.cname){
                console.log("ERROR: USER ALREADY PLACED ORDER");
                that.error_txt = 'ERROR: USER ALREADY PLACED ORDER';
                return false;
              }
        }
        that.newProduct.addDate = new Date;
		    that.products.push(that.newProduct); // add to the array	    
		    that.newProduct = {};// clear the form values
        that.error_txt = '';//reset error text
		}

      });

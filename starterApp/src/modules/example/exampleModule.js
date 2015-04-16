'use strict';

angular.module('example', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'modules/example/templates/home.html',
            controller: 'homeController'
        }).otherwise({
            redirectTo: '/'
        }).when('/about', {
            templateUrl: 'modules/example/templates/about.html',
            controller: 'example1Controller'
        }).when('/dental', {
            templateUrl: 'modules/example/templates/dental.html',
            controller: 'example2Controller'
        });
    }])

    .controller('example1Controller', function($scope) {
        $scope.overrideMessage = function () {
<<<<<<< HEAD
            $scope.message = "Hello from the example 1 partial, controller by controller 1!";
			document.getElementById("email").innerHTML = "Someguy@domain.com";
		}
		
=======
            $scope.message = "We are committed to providing the best care for our patients!";
        }
        $email.showMessage = function () {
            $email.message = "Blahblah@somedomain.com"
        }
>>>>>>> origin/master
    })

    .controller('example2Controller', function($scope){
        $scope.message = "Here there is data on dental plans and various costs associated with them";

        $scope.list = [
            "USA",
            "Bulgaria",
            "France",
            "Spain"
        ];
       

        $scope.add = function() {
            if (event.keyCode == 13 && $scope.new) {
                $scope.list.push($scope.new);
                $scope.new = '';
            }
        };
        })
        
        
    .controller('sampleDataController', function($scope){
        $scope.message = "Hey there! This is the JSON Data Service Controller!";

        $scope.list = [
            "Health Data",
            "Dental DPPO",
            "Dental HMO"
        ];
       

        $scope.add = function() {
            if (event.keyCode == 13 && $scope.new) {
                $scope.list.push($scope.new);
                $scope.new = '';
            }
        };
        })

    .controller('homeController', function($scope, $modal){
        $scope.openBootstrap = function(){
            $modal({scope:$scope, template:'modules/example/templates/bootstrapinfo.html', show:true});
        };
        $scope.openComponents = function(){
            $modal({scope:$scope, template:'modules/example/templates/componentsinfo.html', show:true});
        };
        $scope.openMvc = function(){
            $modal({scope:$scope, template:'modules/example/templates/mvcinfo.html', show:true});
        };
    }
);

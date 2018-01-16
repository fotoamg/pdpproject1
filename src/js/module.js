import angular from 'angular';
import ngRoute from 'angular-route';

let ngModule = angular.module('app', ["ngRoute"]).config(function($routeProvider) {
    $routeProvider
    .when("/", {
        template : require('../main.html')
    })
    .when("/about", {
        template : require('../about.html')
    })
    .when("/cart", {
        template : require('../cart.html')
    });

});

console.log("module", ngModule);

export default ngModule;

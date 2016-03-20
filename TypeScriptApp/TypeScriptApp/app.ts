/// <reference path="typings/browser.d.ts"/>

function Config($routeProvider:angular.route.IRouteProvider) {
    $routeProvider.
        when("/", <angular.route.IRoute>{
            templateUrl: 'features/main/main.html'
        }).
        otherwise(<angular.route.IRoute>{
            redirectTo: "/"
        });
}
Config.$inject = ["$routeProvider"];

var app = angular.module("appModule", [
    "ngRoute"
]);

app.config(Config);
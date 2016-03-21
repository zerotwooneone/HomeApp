/// <reference path="typings/browser.d.ts"/>
module TypeScriptApp {

    function Config($routeProvider: angular.route.IRouteProvider) {
        $routeProvider.
            when("/", <angular.route.IRoute>{
                templateUrl: 'features/main/main.html',
                controller: TypeScriptApp.Features.Main.MainViewModel,
                controllerAs: "MainViewModel"
            }).
            otherwise(<angular.route.IRoute>{
                redirectTo: "/"
            });
    }
    Config.$inject = ["$routeProvider"];

    var app = angular.module("appModule", [
        "ngRoute",
        "ngResource"
    ]);

    app.config(Config);

    export function addController(name: string, constructor: Function) {
        app.controller(name, constructor);
    }

    export function addService(name:string, constructor: Function) {
        app.service(name, constructor);
    }
}


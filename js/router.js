define(function(require){
    var angular = require('angular');
    var app = require('app');
    app.config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('app', {
                abstract: true, // 配置为true时，必须设置其子状态，否则不会运行
                url: '',
                templateUrl: 'tpls/start.html',
                controller: 'AppController', // 配合dependencies中的依赖，可以做到直接运行
                dependencies: [
                    'js/app/controller/AppController',
                    'js/app/directive/navDirective'
                ]
            })
            .state('app.dashboard', {
                url: '',
                templateUrl: 'tpls/dashboard.html',
//              controller: 'AppController', // 配合dependencies中的依赖，可以做到直接运行
//              dependencies: [
//                  'js/app/controller/AppController',
//                  'js/app/directive/navDirective'
//              ]
            })
        ;
    });
});
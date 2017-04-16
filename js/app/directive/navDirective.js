define(function(require){
    var app = require('app');
    var angular = require('angular');
    app.directive('navDirective', function(){
        return {
            templateUrl: 'tpls/nav.html'
        };
    });
});

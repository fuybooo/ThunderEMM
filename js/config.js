require.config({
    baseUrl : './',
    waitSeconds: 0, //永不超时
    paths : {
        'jquery': 'lib/js/jquery',
        'angular': 'lib/js/angular',
        'angular-async-loader': 'lib/js/angular-async-loader',
        'angular-animate':'lib/js/angular-animate',
        'angular-touch':'lib/js/angular-touch',
        'angular-bootstrap':'lib/js/ui-bootstrap-tpls',
        'angular-ui-router':'lib/js/angular-ui-router',
        'restangular':'lib/js/restangular',
        'angular-sanitize':'lib/js/angular-sanitize',
        'angular-ui-load':'lib/js/angular-ui-load',
        'bootstrap-table':'lib/js/bootstrap-table',
        'bootstrap-table-zh-CN':'lib/js/bootstrap-table-zh-CN',
        'bootstrap-select':'lib/js/bootstrap-select',
        'bootstrap':'lib/js/bootstrap',
        'underscore':'lib/js/underscore',
        'lodash':'lib/js/lodash',
        'zTree':'lib/js/zTree/js/jquery.ztree.all.min',
        'ECharts':'lib/js/echarts-all',
        'bootstrap-datetimepicker':'lib/js/bootstrap-datetimepicker',
        'bootstrap-datetimepicker-zh-CN':'lib/js/bootstrap-datetimepicker.zh-CN',
        
        'app': 'js/app',
        'router': 'js/router',
        'globalDataService': 'js/common/service/globalDataService'
    },
    shim : {
        'angular':{
            exports: 'angular'
        },
        'angular-animate':{
            deps:['angular'],
            exports:'angular-animate'
        },
        'angular-touch':{
            deps:['angular'],
            exports:'angular-touch'
        },
        'angular-bootstrap':{
            deps:['angular'],
            exports:'angular-bootstrap'
        },
        'angular-ui-router':{
            deps:['angular'],
            exports:'angular-ui-router'
        },
        'restangular':{
            deps:[
                'angular',
                'underscore',
                'lodash'
            ],
            exports:'restangular'
        },
        'angular-sanitize':{
            deps:['angular'],
            exports:'angular-sanitize'
        },
        'angular-ui-load':{
            deps:['angular'],
            exports:'angular-ui-load'
        },
        'angular-async-loader':{
            deps:['angular'],
            exports:'angular-async-loader'
        },
        'bootstrap':{
            deps:['jquery']
        },
        'bootstrap-table':{
            deps:['bootstrap']
        },
        'bootstrap-select':{
            deps:['bootstrap']
        },
        'zTree':{
            deps:['jquery']
        },
        'ECharts':{
            deps:['jquery']
        },
        'jqueryUi':{
            deps:['jquery']
        },
        'bootstrap-table-zh-CN':{
            deps:['bootstrap-table']
        },
        'app':{
            deps:[
                'angular',
                'angular-async-loader',
                'angular-ui-router',
                'angular-ui-load',
                'restangular',
                'angular-sanitize',
                'angular-animate',
                'angular-touch',
                'angular-bootstrap'
            ]
        },
        'globalDataService':{
            deps:['app']
        },
        'router':{
            deps:['globalDataService']
        },
        'bootstrap-datetimepicker':{
            deps:['bootstrap']
        },
        'bootstrap-datetimepicker-zh-CN':{
            deps:['bootstrap-datetimepicker']
        }
    }
});

require(
    [
        // 库文件
        'angular',
        'jquery',
        'underscore',

        'angular-async-loader',
        'angular-ui-load',
        'angular-ui-router',
        'angular-animate',
        'angular-sanitize',
        'angular-touch',
        'angular-bootstrap',
        'restangular',

        'bootstrap',
        'zTree',
        'ECharts',

        'bootstrap-table',
        'bootstrap-select',
        'bootstrap-datetimepicker',
        'bootstrap-table-zh-CN',
        'bootstrap-datetimepicker-zh-CN',
        
        'app',
        'globalDataService',
        'router'
    ],
    function (angular) {
        angular.element(document).ready(function () {
            angular.bootstrap(document,['app']);
        });
    }
);



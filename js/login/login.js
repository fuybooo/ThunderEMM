define(function(require){
    var $ = require('jquery');
    var util = require('util');
    var angular = require('angular');
    var Popup = require('popupwin');
    // 生成页面
    util.get('login', function(html){
        angular.element(document).ready(function () {
            $('body').empty().append(html);
            angular.module('login', [])
                .controller('LoginController', ['$scope', function($scope){
                    
                }])
                .directive('toRegistDir', function(){
                    return {
                        link: function(scope, ele, attrs){
                            $(ele).click(function(){
                                var registPop = Popup.create({
                                    title: '注册',
                                    htmlUrl: 'regist',
                                    cls: 'regist',
                                    width: 600,
                                    isOkOnly: true,
                                    okBtnText: '注      册',
                                    animation: 'random',
                                    ok: function(){
                                        registPop.close();
                                    }
                                });
                            });
                        }
                    }
                })
                .directive('loginDir', function(){
                    // 一个指令的所有属性示例
                    return {
                        link: function(scope, iElement, iAttrs){
                            iElement.click(function(){
                                window.location.href = '/main.html';
                            });
                        }
                    }
                })
            ;
        
            angular.bootstrap(document,['login']);
        });
    });
    
});
    
    

(function(window, $, angular, undefined){
    // 生成页面
    var loginHtml = tsUtils.getHtml('/tpls/login/login.html', function(html){
        $('body').empty().append(html);
    });
    // 创建loginModule
    var loginModule = angular.module('LoginModule', []);
    
})(window, jQuery, angular);

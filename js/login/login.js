(function(window, $, angular, undefined){
    var angularInvoke = function(html){
        
        angular.element(document).ready(function(){
            // 生成页面
            $('body').empty().append(html);
            
            // 先定义模块
            // 创建loginModule
            var loginModule = angular.module('LoginModule', []);
            
            // 控制器
            loginModule.controller('LoginController', function($scope){
                $scope.loginInfo = {};
                $scope.loginInfo.username = 'fuyb';// 测试数据
                $scope.loginInfo.password = '111111';// 测试数据
                $scope.isLoginFailTipShow = false; // 默认不显示loginFailTip
                $scope.isUsernameTipShow = false; // 默认不显示usernameTip
                $scope.isPasswordTipShow = false; // 默认不显示passwordtip
                var msgTip = {
                    username: '请填写邮箱/手机/用户名！',
                    password: '请填写密码！',
                    loginFail: '用户名或密码错误！'
                }
                var showTip = function(type, msg){
                    if(typeof type === 'undefined'){
                        $scope.isUsernameTipShow = true; // 显示usernameTip
                        $scope.usernameTip = msgTip.username;
                        $scope.isPasswordTipShow = true; // 显示passwordtip
                        $scope.passwordTip = msgTip.password;
                    }else{
                        $scope['is' + tsUtils.upperCaseFirstCharacter(type) + 'TipShow'] = true;
                        $scope[type + 'Tip'] = msg;
                    }
                };
                var closeTip = function(type){
                    $scope['is' + tsUtils.upperCaseFirstCharacter(type) + 'TipShow'] = false;
                };
                var checkLoginInfo = function(type){
                    if(!$scope.loginInfo){
                        if(typeof type !== 'undefined'){
                            // 没有填写任何内容就做了焦点离开输入框的操作
                            showTip(type, msgTip[type]);
                        }else{
                            showTip();// 没有填写任何内容就点击了登录
                        }
                        return false;
                    }else{
                        if(typeof type === 'undefined'){
                            var isPass1 = false;
                            var isPass2 = false;
                            if(!$scope.loginInfo.username){
                                showTip('username', msgTip.username);
                                isPass1 = false;
                            }else{
                                closeTip('username');
                                isPass1 = true;
                            }
                            if(!$scope.loginInfo.password){
                                showTip('password', msgTip.password);
                                isPass2 = false;
                            }else{
                                closeTip('password');
                                isPass2 = true;
                            }
                            return isPass1 && isPass2;
                        }else{
                            if(!$scope.loginInfo[type]){
                                showTip(type, msgTip[type]);
                                return false;
                            }else{
                                closeTip(type);
                                return true;
                            }
                        }
                    }
                };
                // 点击登录
                $scope.onClickLogin = function(){
                    var isPass = checkLoginInfo();
                    if(isPass){
                        // 发送请求，验证登录信息，模拟后台数据
                        tsUtils.getJson('/json/login/user.json', function(data){
                            var loginInfo = {};
                            for(var i = 0, l = data.length; i < l; i++){
                                var v = data[i];
                                if(v.password === $scope.loginInfo.password && 
                                        (v.username === $scope.loginInfo.username ||
                                         v.email === $scope.loginInfo.username ||
                                         v.phoneNum === $scope.loginInfo.username)){
                                    loginInfo = v;
                                    break;
                                }
                            }
                            var loginInfoJson = JSON.stringify(loginInfo);
                            if(loginInfoJson === '{}'){
                                $scope.isLoginFailTipShow = true;
                                $scope.loginFailTip = msgTip.loginFail;
                            }else{
                                localStorage.setItem('loginInfo', loginInfoJson);
                                window.location.href = 'main.html';
                            }
                        });
                    }
                };
                // 焦点离开用户输入框
                $scope.onBlurUsername = function(){
                    checkLoginInfo('username');
                };
                // 焦点离开密码输入框
                $scope.onBlurPassword = function(){
                    checkLoginInfo('password');
                };
            });
            // 再启动angular，angular的依赖是一个模块
            angular.bootstrap(document, ['LoginModule']);
            
        });
        
    }
    // 生成页面
    tsUtils.getHtml('/tpls/login/login.html', angularInvoke);
    
})(window, jQuery, angular);

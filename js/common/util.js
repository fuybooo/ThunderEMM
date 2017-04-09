(function(window, $, undefined){
    /**
     * 扩展jquery的ajax方法
     */
    var ajax = function(options){
        var def_options = {
            cache : false,
            dataType : 'json'
        };
        var newOptions = $.extend(true, def_options, options);
        // 处理参数
        if(newOptions.data){
            var data_str = JSON.stringify(newOptions.data);
            if(data_str != '' && data_str != '{}'){
                // 参数存在，且不为{}
                
            }
        }
        // 成功
        newOptions.success = function(data){
            // 处理请求成功时的默认事务
            
            // 执行默认的成功方法
            if(options.success){
                options.success(data);
            }
        };
        // 失败
        newOptions.error = function(XHR, textStatus, e){
            // textStatus 的取值： null, timeout, error, notmodified, parsererror
            if(options.error){
                options.error(XHR, textStatus, e);
            }
            // 执行默认的error
            
        };
        // 完成
        newOptions.complete = function(XHR, textStatus){
            //textStatus 
            
            if(options.complete){
                options.complete(XHR, textStatus);
            }
        };
        $.ajax(newOptions);
    };
    
    var getDataByAjax = function(param, callback){
        if(typeof param !== 'object'){
            throw new Error('参数必须是对象！');
        }
        if(param.url === undefined || typeof param.url !== 'string'){
            throw new Error('参数的url属性必须为字符串');
        }
        if(typeof callback !== 'function'){
            throw new Error('参数callback必须是一个函数！')
        }
        if(!param.dataType){
            param.dataType = 'json';
        }
        var option = {
            success: function(data){
                callback(data);
            }
        };
        ajax($.extend({
            success: function(data){
                callback(data);
            }
        }, param));
    };
    var getHtml = function(url, callback){
        getDataByAjax({url: url, dataType: 'html'}, callback);
    };
    var getJson = function(url, callback){
        getDataByAjax({url: url}, callback);
    };
    var upperCaseFirstCharacter = function(str){
        return str.split('').shift().toUpperCase() + str.slice(1);
    };
    var isEmptyObject = function(obj){
        return JSON.stringify(obj) === '{}';
    };
    window['tsUtils'] = {
        ajax : ajax,
        getDataByAjax : getDataByAjax,
        getHtml : getHtml,
        getJson : getJson,
        upperCaseFirstCharacter : upperCaseFirstCharacter,
        isEmptyObject : isEmptyObject
    };
})(window, jQuery);
const implement = {

    request: function (controller_action) {
        
        if(!controller_action) {
            return null;
        }

        //Loading.start({message:"请稍后...",animate:true});

        var options = {},
            async = false,      // 异步
            syndata = null,      // 如果是同步返回的数据
            params = {},          // 请求参数
            callback = $.noop();  // 回调函数 ; 如果有回调函授 自动设为异步(async = true)

        // 如果有第二个参数
        if(arguments.length > 1){

            var arg = arguments[1];
            if(typeof(arg) == "object"){
                params = arg;
                if(arguments.length > 2){
                    if(typeof(arguments[2]) == "function"){
                        callback = arguments[2],async = true;
                    }
                    if(arguments.length > 3 && typeof(arguments[3]) == "object"){
                        options = arguments[3]
                    }
                }
            }else{
                if(typeof(arg) == "function"){
                    callback = arg,async = true;
                }
                if(arguments.length > 2 && typeof(arguments[2]) == "object"){
                    options = arguments[2]
                }
            }

        }


        var url = `${SERVICE_URL.BASE}/${controller_action}`;
        if(config.debug){
            console.log("****************************");
            console.log("%c请求地址：","color:blue",url);
            console.log("%c请求参数：","color:blue",params);//console.group();console.dir(params);console.groupEnd();
            console.log("****************************");
        };

        $.ajax($.extend({type : 'POST',async: async,url : url,data:{ robj:JSON.stringify(params) } ,dataType:'json',jsonpCallback:'jsonp',
            success : function(data,textStatus,jqXHR){
                data = data.params != null ? data.params : data;
                if (textStatus == "success") {
                    if(async){
                        callback.call(options.scope ? options.scope : this, data);
                        // callback(data);
                    }else{
                        syndata = data;
                    }
                } else {
                    alert('请求超时或网络故障,错误编号：[' + textStatus + ']')
                }
                //Loading.stop();
            }
        },options));
        return syndata;
    }
	
};

module.exports = implement;

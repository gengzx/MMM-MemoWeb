const implement = {

    //request: async (controller_action) => {
    request: function(controller_action) {

        if(!controller_action) {
            return null;
        } 

        //Loading.start({message:"请稍后...",animate:true});

        var options = {},
            async = false,      // 异步
            syndata = null,      // 如果是同步返回的数据
            params = {},          // 请求参数
            callback = () => {};  // 回调函数 ; 如果有回调函授 自动设为异步(async = true)

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

        var url = `${controller_action}`;
        if(config.debug){
            console.log("****************************");
            console.log("%c请求地址：","color:blue",url);
            console.log("%c请求参数：","color:blue",params);//console.group();console.dir(params);console.groupEnd();
            console.log("****************************");
        };

        fetch(url, Object.assign({
            method: 'POST',
            headers: {
              'Accept': 'application/json',
               //'Content-Type': 'multipart/form-data;charset=utf-8',
              'Content-type': 'application/json;charset=utf-8'
            },
            //mode: "no-cors",
            body: (!params || JSON.stringify(params)=="{}") ? null : JSON.stringify({robj:params}),
        },options))
        .then((response) => response.json())
        .then((res) => { /*(isLoading && Toast.hide());*/ callback(res) })
        .catch((error) => { /*(isLoading && Toast.hide());*/ callback({error:error}) } )

    }
	
};

module.exports = implement;

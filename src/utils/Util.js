
exports.Json = function(){

}();


exports.Crypto = function(){

}();




/**全局对象 */
(function(global) {


    Array.prototype.findLastIndex = function(cb, context) {
        let array = this;
    
        for (let i = array.length-1; i >=0; i--) {
            const element = array[i];
            if (cb.call(context, element, i, array)) {
              return i
            }
        }
        return -1
    }

    Date.prototype.format = function (fmt) { //author: meizz
        var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

})(window)    


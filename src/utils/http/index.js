

var http_interface = function(){
  this.verison = "0.1";
  this.Loading = {

    start: function(options) {
        if (options && options.animate) {
            $('.page-spinner-bar').remove();
            $('body').append('<div class="page-spinner-bar"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');
        } else {
            $('.page-loading').remove();
            $('body').append('<div class="page-loading"><img src="../../assets/images/loading-spinner-grey.gif"/>&nbsp;&nbsp;<span>' + (options && options.message ? options.message : '加载中...') + '</span></div>');
        }
    },
  
    stop: function() {
        $('.page-loading, .page-spinner-bar').remove();
    }
  }
  
}

http_interface.prototype = {

  get:function (params, callback) {},

  post:function (record, params, callback) {},

  request:function (params, callback) {}

}

module.exports = function (type = 'fetch') {

  http_interface.prototype = require('./http.' + type + '.js')

  return new http_interface()

}
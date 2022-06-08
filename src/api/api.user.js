/**
 * 用户
 */
module.exports = function(){

    var me = {};

    var user;

    var menu;


    /**
     * 对应数据库字段
     * @property {Object} key
     */
    me.KEYS = {
        // ID
        ID:"id",
        // 用户名
        NAME:"nm",
        // 用户显示名
        DISP:"disp",
        // 邮箱
        MAIL:"mail",
        // 移动电话
        MOBILE:"mobile",
        // 所属单位
        UNIT:"unit",
        // 最后登录时间
        LASTLOGIN:"lastLogin",
        // 用户角色
        FRONTROLE:"frontRole"
    };

    me.getUser = function(){
        return user || (user = this.signin().user)
    }

    me.getMenu = function(){
        return menu || (menu = this.signin().menu)
    }

    me.isLogin = function(){
        return !cookie.get(COOKIE_USER_KEY)
    }

    /**
     * 判断用户是否登录
     * @return {boolean}
     */
    /*
    me.isLogin = async () => {
        var token = await storage.getItem(STORAGE_KEY.TOKEN);
        if (token === false) {
          return false;
        }
        return typeof (token) === 'string' ? token : '';
    };
*/

    me.login = function(username, password, callback){
        const robj = {
            username: username,
            password: password
        };
        Ajax.request("user/login",robj,callback,{loading:true});

    }

    me.logout = function(callback){
        Ajax.request("user/logout",{},(res) => {
            cookie.remove(COOKIE_USER_KEY, { path: '/' });
            callback.call(this, res);
        },{loading:true});
    }


    return me;

};





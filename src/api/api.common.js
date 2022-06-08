
/**
 * 公共服务
 */
module.exports = function(Http){

    /**
     * BaseService
     * @property {Object} me
     */
    var me = {};

    /**
     * 普通查询
     * @method request
     * @params {Object} params 请求参数
     *              tbname:"t_sys_user" 表名
     *              columns:"f_name,f_code"   字段
     * @param {Function} callback 回调函数
     * @return {Object} data (如果没有回调函数 认为同步请求 并返回数据)
     */
    me.queryData = function(params,callback){
        if(params.start > -1){
            params.start = (params.start - 1) * params.length;
        }
        Http.request(params.start > - 1 ? "common/findPage" : "common/find",params,callback);
    };

    /**
     * 保存数据
     * @method request
     * @params {Object} params 请求参数
     *              tbname:"t_sys_user" 表名
     *              columns:{f_name:"value",f_name:"value"} 数据
     * @param {Function} callback 回调函数
     * @return {Object} data (如果没有回调函数 认为同步请求 并返回数据)
     */
    me.save = function(params,callback){
        Http.request("common/save",params,callback);
    };

    /**
     * 删除数据
     * @method request
     * @params {Object} params 请求参数
     *              tbname:"t_sys_user" 表名
     *              pkname:"F_ID" 主键名称
     *              idvalue:"value,value" 数据
     * @param {Function} callback 回调函数
     * @return {Object} data (如果没有回调函数 认为同步请求 并返回数据)
     */
    me.removeById = function(params,callback){
        Http.request("common/idel",params,callback);
    };

    return me;

};


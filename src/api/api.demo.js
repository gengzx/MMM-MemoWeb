
/**
 * 接口
 */
module.exports = function(Http){

    /**
     * BaseService
     * @property {Object} me
     */
    const me = {};
    const TBNAME = "T_SYS_UNIT";

    /**
     * 加载数据
     */
    me.loadData = function(params,callback, scope){
        const robj = Object.assign({
            tbname: TBNAME,
            cond: ""
        }, params);
        Http.request((robj.start && robj.limit) ? 'common/findPage' : 'common/find?t=test',robj,callback,{ scope: scope });
    }

    return me;
};
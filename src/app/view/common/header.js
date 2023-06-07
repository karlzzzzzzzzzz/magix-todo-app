/*
    generate by magix-combine: https://github.com/thx/magix-combine
    author: xinglie.lkf@alibaba-inc.com; kooboy_li@163.com
 */
define('app/view/common/header',['require','module','exports',"magix"],function(require,module,exports){
 var Magix = require('magix')

 module.exports = Magix.View.extend({
     tmpl: "<header class=\"navbar navbar-default\"><ul class=\"nav navbar-nav\"><li><a href=\"#!/todo/list\">todo列表</a></li><li><a href=\"#!/todo/add\">新建todo</a></li></ul></header>",
     render: function() {
         this.setHTML(this.id, this.tmpl)
     }
 })

});
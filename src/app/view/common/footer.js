/*
    generate by magix-combine: https://github.com/thx/magix-combine
    author: xinglie.lkf@alibaba-inc.com; kooboy_li@163.com
 */
define('app/view/common/footer',['require','module','exports',"magix"],function(require,module,exports){
 var Magix = require('magix')

 module.exports = Magix.View.extend({
     tmpl: "<header><h2>footer common</h2></header>",
     render: function() {
         this.setHTML(this.id, this.tmpl)
     }
 })

});
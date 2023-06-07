/*
    generate by magix-combine: https://github.com/thx/magix-combine
    author: xinglie.lkf@alibaba-inc.com; kooboy_li@163.com
 */
define('app/view/todo/add',['require','module','exports',"magix","jquery"],function(require,module,exports){
var Magix = require('magix')
var $ = require('jquery')

module.exports = Magix.View.extend({
    tmpl: "<div><h2>新建Todo</h2><form mx-submit=\"\u001f\u001esaveTodo()\"><div class=\"form-group\"><label>Name:</label><input type=\"text\" class=\"form-control\" name=\"name\" value=\"<%= name %>\"></div><div class=\"form-group\"><button type=\"submit\" class=\"btn btn-default\">提交</button></div></form></div>",
    render: function() {
      var todo = {
        name: 'magix'
        }
      this.setViewHTML(todo)
    },

    /**
     * 事件监听器方括号内注明方法所监听的事件, 事件监听器的this为view
     * @param e {Event} 所使用框架的event事件, 如果是jquery, 那就是jquery事件, kissy类似
     **/
    'saveTodo<submit>': function (e) {
        e.preventDefault()

        // 通过id查找模块容器DOM节点
        var $main = $('#' + this.id)
        var $name = $main.find('[name=name]')

        $.ajax({
            url: '/api/todo/add.json',
            data: {
                name: $name.val()
            }
        }).then(function (resp) {
            if (resp.info.ok) {
                alert('保存成功')
                Magix.Router.to('/todo/list')
            } else {
                alert(resp.info.message)
            }
        })
    }
})

});
define("app/view/todo/add",["require","module","exports","magix","jquery"],function(e,t,a){var o=e("magix"),i=e("jquery");t.exports=o.View.extend({tmpl:'<div><h2>新建Todo</h2><form mx-submit="saveTodo()"><div class="form-group"><label>Name:</label><input type="text" class="form-control" name="name" value="<%= name %>"></div><div class="form-group"><button type="submit" class="btn btn-default">提交</button></div></form></div>',render:function(){var e={name:"magix"};this.setViewHTML(e)},"saveTodo<submit>":function(e){e.preventDefault();var t=i("#"+this.id),a=t.find("[name=name]");i.ajax({url:"/api/todo/add.json",data:{name:a.val()}}).then(function(e){e.info.ok?(alert("保存成功"),o.Router.to("/todo/list")):alert(e.info.message)})}})});
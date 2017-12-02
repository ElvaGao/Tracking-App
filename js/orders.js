//订单列表操作
var btnArray = ['确认', '取消'];
var arr = ['.mui-btn-archive','.mui-btn-top','.mui-btn-delete'];
var elem = null;
//archive
mui('#order_list').on('tap',arr[0], function(event) {	
	var li = this.parentNode.parentNode;
	txtTips('存档成功！<br>无后台，不进行操作。');
	setTimeout(function() {
		mui.swipeoutClose(li);
	}, 0);
});
//置顶
mui('#order_list').on('tap',arr[1], function(event) {
	var li = this.parentNode.parentNode;
	var ul = li.parentNode;
	ul.insertBefore(li,ul.getElementsByTagName("li")[0]);
	txtTips('置顶成功！');
	setTimeout(function() {
		mui.swipeoutClose(li);
	}, 0);
});	
//删除
mui('#order_list').on('tap',arr[2], function(event) {
	var li = this.parentNode.parentNode;
	var ul = li.parentNode;
	mui.confirm('确认删除该条记录？', 'TrackingGo', btnArray, function(e) {
		if (e.index == 0) {
			li.parentNode.removeChild(li);
			panduan(ul);
		} else {
			setTimeout(function() {
				mui.swipeoutClose(li);
			}, 0); 
		}
	});
});

//跳转到结果页面
mui('#order_list').on('tap','li',function(){
	mui.openWindow({
		url: 'result.html',
		id: 'result.html'
	})
})
//判断订单列表是否全部被删除
function panduan(ul){
	var length = ul.getElementsByTagName("li").length;
	var txt = '<div class="ir_list_null" id="ir_list_null">'
			+ "You don't have any archived/history numbers corrently."
			+ '</div>';
	if (length==0) {
		ul.innerHTML = txt;
	}
}
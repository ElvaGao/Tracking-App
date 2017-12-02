//获取扫码后返回的结果
function scaned( code ) {
	document.getElementById("order_number").value = code;
}
function onempty() {
	if ( window.plus ) {
		plus.nativeUI.alert('无扫描记录');
	} else {
		alert( '无扫描记录' );  
	} 
}
//跳转到扫码页面
mui("#barcode")[0].addEventListener("tap",function(){
	mui.openWindow({
		url: 'barcode.html',
		id: 'barcode'
	})
});
//选择快递公司
var userPicker = new mui.PopPicker();
userPicker.setData([{value: 'sf',text: '顺丰'}, {value: 'yt',text: '圆通'}, {value: 'yd',text: '韵达'}, {value: 'zt',text: '中通'}, {value: 'yz',text: '邮政'}, {value: 'others',text: '其它'}]);
var showUserPickerButton = document.getElementById('showUserPicker');
var showUserPicker = document.getElementById('showUserPicker');
showUserPickerButton.addEventListener('tap', function(event) {
	userPicker.show(function(items) {
		document.getElementById('txt').innerHTML = items[0].text;
	});
}, false);
//提交订单号和快递公司的验证
mui("#start_track")[0].addEventListener("tap",function(){
	var num = document.getElementById("order_number").value;
	var courier = document.getElementById("txt").innerHTML;
	if (num==null || num=="") {
		txt = "请输入订单号";
		txtTips();
		return false;
	}else if (courier=="Choose a courier ..." || courier==null || courier=="") {
		txt = "Choose a courier ...";
		txtTips();
		return false;
	}
	//页面跳转
	mui.openWindow({
		url: 'result.html',
		id: 'result'
	})
});

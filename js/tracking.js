window.onload = function(){
	mui.init();
	mui.plusReady(function(){
		plus.nativeUI.closeWaiting();
		mui.currentWebview.show();
	})
}	

//提示框
var tipsDiv = document.createElement('div');
	tipsDiv.id = 'auto_tips';
	tipsDiv.className = 'auto_tips';
	tipsDiv.innerHTML = '<span class="mui-icon iconfont icon-pingjia"></span><span id="auto_tips_text"></span>';
//调用提示框
function txtTips(message,type){
	mui('.mui-inner-wrap')[0].appendChild(tipsDiv);
	mui('#auto_tips_text')[0].innerHTML = message;
	setTimeout(function(){
		mui('.mui-inner-wrap')[0].removeChild(mui('#auto_tips')[0]);
	},1000);
}

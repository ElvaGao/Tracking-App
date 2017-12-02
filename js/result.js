//右上角菜单栏的操作
var shares=null,bhref=false;
var Intent=null,File=null,Uri=null,main=null;
var statusPT = 0;
var intent = null;
var GKLocalPlayer = null;
var NSNotificationCenter = null;
var readTxt = null;
var Context=null,main=null;
// H5 plus事件处理
// 监听plusready事件   ios和安卓
mui.plusReady(function(){
	mui('.result_detail_link')[0].addEventListener('tap',function(){
		mui.openWindow({
			url: 'couriers.html',
			id: 'couriers.html'
		});
	});
	
	switch ( plus.os.name ) {
        case "Android":
	        // Android平台: plus.android.*
	        Intent = plus.android.importClass("android.content.Intent");
			File = plus.android.importClass("java.io.File");
			Uri = plus.android.importClass("android.net.Uri");
			main = plus.android.runtimeMainActivity();
			// 导入android.content.Intent类对象
			intent=new Intent();
			GKLocalPlayer  = plus.ios.importClass("GKLocalPlayer");
			Context = plus.android.importClass("android.content.Context");
			statusPT = 0;
        break;
        case "iOS":
	        // iOS平台: plus.ios.*
	        // iOS平台导入NSNotificationCenter类
			NSNotificationCenter = plus.ios.importClass("NSNotificationCenter");
			statusPT = 1;
        break;
        default:
        // 其它平台
        break;
    }
});
//一键复制功能
var orderNumber = document.getElementById("order_number");
var orderStatus = document.getElementById("order_last_status");
var orderDtails = document.getElementById("order_last_detail");
mui("#rt_copy_number")[0].addEventListener('tap',function(){
	readTxt = orderNumber.innerHTML;
	var txt = this.getAttribute("data-txt");
	copy(txt);
})
mui("#rt_copy_status")[0].addEventListener('tap',function(){
	readTxt = orderStatus.innerHTML;
	var txt = this.getAttribute("data-txt");
	copy(txt);
})
mui("#rt_copy_details")[0].addEventListener('tap',function(){
	readTxt = orderDtails.innerHTML;
	var txt = this.getAttribute("data-txt");
	copy(txt);
})
mui("#order_archive")[0].addEventListener('tap',function(){
	readTxt = orderDtails.innerHTML;
	var txt = this.getAttribute("data-txt");
	txtTips(txt);
});
//调用提示框
function txtTips(message,type){
	mui('body')[0].appendChild(tipsDiv);
	mui('#auto_tips_text')[0].innerHTML = message;
	setTimeout(function(){
		mui('body')[0].removeChild(mui('#auto_tips')[0]);
	},1000);
}
//Android-写入剪贴板：
function copyToClipBorad(){
	Context = plus.android.importClass("android.content.Context");
    var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
    plus.android.invoke(clip,"setText",readTxt);
}
//Android-读取剪贴板
function copyToClip(){
	Context = plus.android.importClass("android.content.Context");
    var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
    copyToClipBorad();
    return plus.android.invoke(clip,"getText");
 }
//iOS：设置/获取文本内容:
function iosCopy(){
	var UIPasteboard = plus.ios.importClass("UIPasteboard");
	var generalPasteboard = UIPasteboard.generalPasteboard();
	generalPasteboard.setValueforPasteboardType(readTxt, "public.utf8-plain-text");
	var value = generalPasteboard.valueForPasteboardType("public.utf8-plain-text");   
}
function copy(txt){
	if(statusPT==0){
		copyToClip();
	}else{
		iosCopy();
	}
	txtTips(txt);
}

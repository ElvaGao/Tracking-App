var ws=null,wo=null;
var scan = null,domready=false;

// H5 plus事件处理
function plusReady(){

	if(ws||!window.plus||!domready){
		return;
	}
	// 获取窗口对象
	ws=plus.webview.currentWebview();
	wo=ws.opener();
	// 开始扫描
	ws.addEventListener('show',function(){
		var filters = [plus.barcode.QR, plus.barcode.EAN13, plus.barcode.EAN8, plus.barcode.CODABAR, plus.barcode.CODE128, plus.barcode.RSS14, plus.barcode.CODE39 ];
		scan=new plus.barcode.Barcode('scan',filters);
	    scan.onmarked=onmarked;
	    scan.start({conserve:true,filename:"_doc/barcode/"});
	});
	// 显示页面并关闭等待框
    ws.show("pop-in");
    wo.evalJS("closeWaiting()");
    /*
	 * 底部button设置
	 */
	var Flash = true;
	//开始扫描
	document.getElementById("scan_start").addEventListener('tap',function(){
		scan.start();
	});
	//取消扫描
	document.getElementById("scan_cancel").addEventListener('tap',function(){
		scan.cancel();
	});
	//打开闪光灯
	document.getElementById("scan_flash").addEventListener('tap',function(){
		if(Flash){
			scan.setFlash(true);
			Flash = false;
		}else{
			scan.setFlash(false);
			Flash = true;
		}
	});
}
if(window.plus){
	plusReady();
}else{
	document.addEventListener("plusready",plusReady,false);
}
// 监听DOMContentLoaded事件
document.addEventListener("DOMContentLoaded",function(){
	domready=true;
	plusReady();
},false);
// 二维码扫描成功
function onmarked(type,result,file){
    result = result.replace(/\n/g, '');
    wo.evalJS("scaned('"+ result +"');");
    back();
}
// 从相册中选择二维码图片 
function scanPicture() {
    plus.gallery.pick(function(path){
	    plus.barcode.scan(path,onmarked,function(error){
			plus.nativeUI.alert( "无法识别此图片" );
		});
    },function(err){
        plus.nativeUI.alert("Failed: "+err.message);
    });
}
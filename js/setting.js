////推送
mui.plusReady(function(){
	if(plus.os.name=="Android"){
		Intent = plus.android.importClass("android.content.Intent");
		File = plus.android.importClass("java.io.File");
		Uri = plus.android.importClass("android.net.Uri");
		main = plus.android.runtimeMainActivity();
	}
});
//评价应用
document.getElementById("rate").addEventListener('tap', function() {
	if (mui.os.ios) {
		location.href = 'https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewContentsUserReviews?id=682211190&pageNumber=0&sortOrdering=2&type=&mt=8'; //需要替换地址
	} else if (mui.os.android) {
		plus.runtime.openURL("market://details?id=io.dcloud.HelloMUI", function(e) {
			plus.runtime.openURL("market://details?id=io.dcloud.HelloMUI", function(e) {
				mui.alert("360手机助手和应用宝，你一个都没装，暂时无法评分，感谢支持");
			}, "com.qihoo.appstore");
		}, "com.tencent.android.qqdownloader");
	}
});
/*
 * 打开OS系统设置－通知
 */
function setPush(){
	if(mui.os.ios){
        plus.runtime.launchApplication({action: 'prefs:root=NOTIFICATIONS_ID'}, function(e){}); //需要替换包名
    } else {
    		var main = plus.android.runtimeMainActivity(); //获取activity
		var Intent = plus.android.importClass('android.content.Intent');
		var Settings = plus.android.importClass('android.provider.Settings');
		var packageURI = Uri.parse("package:" + "com.tencent.mm");
		var intent = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS,packageURI);//可设置表中所有Action字段
		main.startActivity(intent); 
    }  
}
/*
 * 跳转到appStore中评分
 */
function setRate(){
	if (mui.os.ios) {
		location.href = 'https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewContentsUserReviews?id=682211190&pageNumber=0&sortOrdering=2&type=&mt=8'; //需要替换地址
	} else if (mui.os.android) {
		plus.runtime.openURL("market://details?id=io.dcloud.HelloMUI", function(e) {
			plus.runtime.openURL("market://details?id=io.dcloud.HelloMUI", function(e) {
				mui.alert("Rating is temporarily unavailable. Thank you for your support.");
			}, "com.qihoo.appstore");
		}, "com.tencent.android.qqdownloader");
	}
}
/*
 * 跳转到email
 */
function sendEmail(){
	var msg = plus.messaging.createMessage(plus.messaging.TYPE_EMAIL);
	msg.to = ['service@dcloud.io'];
	msg.body = 'This is an example mail';
	msg.addAttachment("_www/imags/icon_180.png.jpg");
	plus.messaging.sendMessage(msg,function(){
		mui.alert("Mail has been sent successfully. Thanks.");
	},function(){
		mui.alert("Failed to send your message. Thank you for your support.");
	} );
}

// 菜单操作
mui.plusReady(function(){
	mui('#offCanvasSideScroll').scroll();
	mui('#offCanvasContentScroll').scroll();
	mui('.mui-scroll-wrapper').scroll();
	/*
	 * 暂时的菜单跳转
	 */
	mui("#menu_list").on("tap","a",function(){
		var href = this.getAttribute("dataTxt");
		mui.openWindow({
			url: href,
			id: href,
			createNew:true,
			show:{
				autoShow:true,//页面loaded事件发生后自动显示，默认为true
				aniShow:"",//页面显示动画，默认为”slide-in-right“；
				duration: 100
			},
			waiting:{
		      	autoShow:false,			//自动显示等待框，默认为true
		      	title:'loading...',		//等待对话框上显示的提示内容
		      	options:{
		        	width:200,				//等待框背景区域宽度，默认根据内容自动计算合适宽度
		        	height:200				//等待框背景区域高度，默认根据内容自动计算合适高度
	      		}
	    	}
		});
		setTimeout(function(){
			mui('#offCanvasWrapper').offCanvas("close");
		},100);
	});
});
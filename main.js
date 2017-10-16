// 鼠标悬停时改变样式
function btnDisp(){
	var oBtn = document.getElementsByTagName('button');
	for (var i = 0; i < oBtn.length; i++) {
		oBtn[i].onmouseover = function() {
			this.style.backgroundColor= "red";
			this.style.color = "#FFF";
			this.style.paddingLeft = "40px";
			this.style.borderRadius = "5px";	
		}
	}
		
}
// 鼠标移出时恢复样式
function btnNor(){
	var oBtn = document.getElementsByTagName("button");
	for (var i = 0; i < oBtn.length; i++) {
		oBtn[i].onmouseout = function() {
			this.style.backgroundColor= "#FFF";
			this.style.color = "#53AAFF";
			this.style.paddingLeft = "0px";
		}
	}
}
function listDisp(){	
	var oMenuAll = document.getElementsByClassName('menu');// 获取菜单列数
	for (var i = 0; i < oMenuAll.length; i++) {			
		oMenuAll[i].onclick = function() {					//	例遍菜单
			var oDiv = document.getElementsByClassName("list1")[this.id] ;//获取当前菜单所将显示的DIV
			var oAllDiv = document.getElementsByClassName("list1");		//获取所有菜单的DIV
			if (getStyle(oDiv,"display") =='none') {					//如果当前菜单DIV是隐藏的
				for (var j = 0; j < oAllDiv.length; j++) {				//将所有菜单的DIV设置隐藏
					css(oAllDiv[j],"display","none");
				}
				oDiv.style.display="block";//将当前菜单DIV设置为显示					
			}
			else{				
				oDiv.style.display="none";								//否则将当前菜单设置为隐藏
			}	
		}
	}
}
function getStyle(obj,attr) {		//获取CSS属性并兼容IE等浏览器
	if (obj.currentStyle) {
		return obj.currentStyle[attr];//currentStyle只能在IE中使用
	}else {
		return getComputedStyle(obj,false)[attr];
	}
}
function css() {						//判断CSS参数的个数不同实现获取和修改功能
	if (arguments.length==2) {
		return getStyle(arguments[0],arguments[1]);
	}else{
		arguments[0].style[arguments[1]]=arguments[2];
	}
}
		


function addLoadEvent(func){						//初始化函数
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
addLoadEvent(listDisp);
addLoadEvent(btnDisp);
addLoadEvent(btnNor);	
	
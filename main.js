function btnDisp(whitchbtn){
		whitchbtn.style.backgroundColor= "red";
		whitchbtn.style.color = "#FFF";
		whitchbtn.style.paddingLeft = "40px";
		whitchbtn.style.borderRadius = "5px";
}
function btnNor(){
	var button = document.getElementsByTagName("button");
	for (var i = 0; i < button.length; i++) {
		button[i].style.backgroundColor= "#FFF";

		button[i].style.color = "#53AAFF";
		button[i].style.paddingLeft = "0px";
	}
}

var e = 0;
function get_nextSibling(n){
	var x = n.nextSibling;
	while(x && x.nodeType!=1){
		x = x.nextSibling;
	}
	return x;
}

function listDisp(thebtn){
	var id = thebtn.getAttribute("id");
	var z = document.getElementsByClassName("menu")[id];
	var y = get_nextSibling(z);
	console.log(id);
	console.log(z);
	console.log(y);
		if (e == 0) {
		y.style.display = "block";
		e = 1;	
	}
		else{	
		y.style.display = "none";
		e = 0;
	}
	console.log(e);
}		


function addLoadEvent(func){
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

	
	
	
		
	


// function list(){
// 	var e = 0;
// 	if(e==0){
// 		执行语句1;
// 		e=1;
// 	}
// 	else{
// 		执行语句2;
// 		e=0;
// 	}
// }


// 默认情况下，list为隐藏
// 事件1：当鼠标移动到menu上时，menu背景颜色改变，文本内容向右平移，
// 事件2：当鼠标移出时button样式返回默认样式，这里我想直接获取CSS样式表的样式，发现不行，具体解释参照这个链接
// http://www.cnblogs.com/heshan1992/p/5401460.html

// 事件3：当鼠标点击menu时，list显示并弹出

// bug记录：
// 1.先是出现 index.html:9 Uncaught ReferenceError: listDisp is not defined
// at HTMLButtonElement.onmouseover (index.html:9)
// 然后看第九行，说我函数未定义，各种修改js，怎么也找不到毛病，再一看，原来没引入js，引入js。
// 2.然后又报错，说 Uncaught SyntaxError: Invalid or unexpected token，然后又是找js毛病，结果
// 找不到，然后点击调试监控的js文件，才知道报错位置是注释未加双斜杠
// 3.任何函数名后面不加（），所有函数都会报错 index.html:10 Uncaught ReferenceError: btnNor is not defined 类似这样的提示信息
// 4.在listDisp编写时想循环执行if和else，但是每次只执行if不执行else，后来求助朋友，一语道破。很简单的错误：我把var e=0;放在了函数第一行而不是外面
// 每次调用函数都先执行 var e=0;else当然没机会执行
// 5.在写好一个btn之后想扩展成多个btn，可是因为我调用的是 document.getElementsByTagName和 document.getElementsByClassName，在结构中class
// 又全都一样，造成操作一个按键，多个按键也一并操纵了，所以继续修改

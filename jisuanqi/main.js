
// 输入框value默认值为0
document.getElementById("screenId").value = 0;
// 定义显示函数
function acquire(whichbtn){
	// 获取输入框
	var screen = document.getElementById("screenId");
	// 如果输入框value为0，则清除
	if (screen.value == 0) {
		screen.value = null;
		screen.value += document.getElementById(whichbtn).value;
	}
	else{
		screen.value += document.getElementById(whichbtn).value;
	// 通过按键返回的id值获取id对应的数字并自加赋值给屏幕中的value
	}
}
function eva(){
	var screen = document.getElementById("screenId");
	// 通过按键返回的id值获取id对应的数字并自加赋值给屏幕中的value
	screen.value = eval(screen.value);
}
function clearNum(){
	var screen = document.getElementById("screenId");
	screen.value = 0;
}



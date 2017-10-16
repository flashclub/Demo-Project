// function Trim()
// { 
// 	var button = document.getElementsByTagName("button");
// 	var input = document.getElementsByTagName("input");
// 	button[0].onclick = function(){
// 		deletBlank(this);
// 		return true;
// 	}	
	
// }

function Trim(str){
	// console.log(str);
	// var input = document.getElementsByTagName("input");
	// var str = input[0].getAttribute("value");
	// console.log(str1);
	str.replace(/(^\s*)|(\s*$)/g,"");
	console.log(str);
	// input[0].setAttribute("value",str1);
	// return true;
}
// function addLoadEvent(func){
// 	var oldonload = window.onload;
// 	if(typeof window.onload != "function"){
// 		window.onload = func;
// 	}else{
// 		window.onload = func;
// 		onload();
// 		func();
// 	}
// }

// addLoadEvent(Trim);
window.onload = btnon;

function btnon(){	
	var input = document.getElementsByTagName("input");
	var value0 = input[0].getAttribute("value");
	var value1 = input[1].getAttribute("value");
	var btn = document.getElementsByTagName("button");
	btn[0].onclick = function(){
		ale(value0,value1);
	}
}

function ale(value0,value1){
	alert(value0);
	alert(value1);
}
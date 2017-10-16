window.onload = btnon;

function btnon(){	
	var input = document.getElementsByTagName("input");
	var btn = document.getElementsByTagName("button");
	btn[0].onclick = function(){
		ale(input[0],input[1]);
	}
}

function ale(x,y){
	alert(x.value);
	alert(y.value);
}

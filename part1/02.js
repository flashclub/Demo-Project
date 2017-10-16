function green1(){
	pro();
	red.style.backgroundColor = "#FF0000";
	green.style.backgroundColor = "#FFF";
	black.style.backgroundColor = "#000";
	var daohang = document.getElementById("daohang");
	daohang.style.backgroundColor = "#008000";
	var body = document.getElementsByTagName("body");
	body[0].style.backgroundColor = "#A3C5A8";
}
function red1(){
	pro();
	red.style.backgroundColor = "#FFF";
	green.style.backgroundColor = "#008000";
	black.style.backgroundColor = "#000";
	var daohang = document.getElementById("daohang");
	daohang.style.backgroundColor = "#FF0000";
	var body = document.getElementsByTagName("body");
	body[0].style.backgroundColor = "pink";
}
function black1(){
	pro();
	red.style.backgroundColor = "#FF0000";
	green.style.backgroundColor = "#008000";
	black.style.backgroundColor = "#FFF";
	var daohang = document.getElementById("daohang");
	daohang.style.backgroundColor = "#000";
	var body = document.getElementsByTagName("body");
	body[0].style.backgroundColor = "#9C9C9C";
}

var pro = function (){
	var red = document.getElementById("red");
	var green = document.getElementById("green");
	var black = document.getElementById("black");

}


function active(){
	pro();
	red.onclick = function(){
		red1();
	}
	green.onclick = function(){
		green1();
	}
	black.onclick = function(){
		black1();
	}
}
function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload !="function") {
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

addLoadEvent(active);
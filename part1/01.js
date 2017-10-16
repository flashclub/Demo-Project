function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	}else{
		window.onload = function(){
		oldonload();
		func();}
	}
}

function widther(){
	var div = document.getElementsByTagName("div");
	div[1].style.width = "250px";
}
function heighter(){
	var div = document.getElementsByTagName("div");
	div[1].style.height = "250px";
}
function chgcol(){
	var div = document.getElementsByTagName("div");
	div[1].style.backgroundColor = "red";
}
function hidd(){
	var div = document.getElementsByTagName("div");
	div[1].style.display = "none";
}
function rest(){
	var div = document.getElementsByTagName("div");
	div[1].style.display = "block";
	div[1].style.width = "200px";
	div[1].style.height = "200px";
	div[1].style.backgroundColor = "#000";
}

function all(){
	var btn1 = document.getElementById("1");
	var btn2 = document.getElementById("2");
	var btn3 = document.getElementById("3");
	var btn4 = document.getElementById("4");
	var btn5 = document.getElementById("5");
	btn1.onclick = function(){
		widther();
	}
	btn2.onclick = function(){
		heighter();
	}
	btn3.onclick = function(){
		chgcol();
	}
	btn4.onclick = function(){
		hidd();
	}
	btn5.onclick = function(){
		rest();
	}
}

addLoadEvent(all);

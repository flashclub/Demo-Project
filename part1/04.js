window.onload = colred;

function colred(){
	var div = document.getElementsByTagName("div");
	var btn = document.getElementsByTagName("button");
	btn[0].onclick= function(){
		for (var i = 0; i < div.length; i++) {
			div[i].style.backgroundColor = "red";
		}
	}
}
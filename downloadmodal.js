var modal=document.getElementById("downloadBox");
var btn=document.getElementById("downloadBtn");
var btn2=document.getElementById("downloadBtn2");
var span=document.getElementsByClassName("close")[0];
var winbtn=document.getElementById("winBtn");
var linbtn=document.getElementById("linBtn");
var macbtn=document.getElementById("macBtn");
btn.onclick=function() {
	document.body.style.overflow = "hidden";
	modal.style.display="block";
}
btn2.onclick=function() {
	document.body.style.overflow = "hidden";
	modal.style.display="block";
}
span.onclick=function() {
	document.body.style.overflow = "";
	modal.style.display="none";
}
window.onclick=function(event) {
	if (event.target==modal) {
		document.body.style.overflow = "";
		modal.style.display="none";
	}
}
winbtn.onclick=function() {
	if(winbtn.disabled==false) {
		location.href="https://github.com/TheRefraction/therefraction.github.io/raw/main/downloads/DESTORY-Demo-Windows.exe";
	}
}
linbtn.onclick=function() {
    if(linbtn.disabled==false) {
		location.href="https://github.com/TheRefraction/therefraction.github.io/raw/main/downloads/DESTORY-Demo-Linux.AppImage";
	}
}
macbtn.onclick=function() {
    if(macbtn.disabled==false) {
		location.href="";
	}
}
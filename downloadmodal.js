var modal=document.getElementById("downloadBox");
var btn=document.getElementById("downloadBtn");
var btn2=document.getElementById("downloadBtn2");
var span=document.getElementsByClassName("close")[0];
var winbtn=document.getElementById("winBtn");
var linbtn=document.getElementById("linBtn");
var macbtn=document.getElementById("macBtn");
btn.onclick=function() {
	modal.style.display="block";
}
btn2.onclick=function() {
	modal.style.display="block";
}
span.onclick=function() {
	modal.style.display="none";
}
window.onclick=function(event) {
	if (event.target==modal) {
		modal.style.display="none";
	}
}
winbtn.onclick=function() {
	if(winbtn.disabled==false) {
		location.href="https://github.com/TheRefraction/therefraction.github.io/raw/main/downloads/DESTORY-Default-0.7.1.17008.exe";
	}
}
linbtn.onclick=function() {
    if(linbtn.disabled==false) {
		location.href="";
	}
}
macbtn.onclick=function() {
    if(macbtn.disabled==false) {
		location.href="";
	}
}
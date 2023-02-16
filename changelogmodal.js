//var modal=document.getElementById("changelogBox");
var c_modal=document.getElementById("changelogBox");
var c_btn=document.getElementById("changelogBtn");
var c_span=document.getElementsByClassName("c_close")[0];
c_btn.onclick=function() {
	c_modal.style.display="block";
}
c_span.onclick=function() {
	c_modal.style.display="none";
}
window.onclick=function(event) {
	if (event.target==c_modal) {
		c_modal.style.display="none";
	}
	if (event.target==modal) {
		modal.style.display="none";
	}
}
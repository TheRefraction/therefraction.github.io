var t0_modal=document.getElementById("t0Box");
var t0_btn=document.getElementById("t0Btn");
var t_span=document.getElementsByClassName("t_close")[0];
t0_btn.onclick=function() {
	t0_modal.style.display="block";
}
t_span.onclick=function() {
	t0_modal.style.display="none";
}
window.onclick=function(event) {
	if (event.target==t0_modal) {
		t0_modal.style.display="none";
	}
	if (event.target==modal) {
		modal.style.display="none";
	}
}
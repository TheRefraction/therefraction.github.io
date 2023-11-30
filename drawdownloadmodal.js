document.write(`\
	<link rel="stylesheet" href="downloadmodal.css">\
	<div id="downloadBox" class="modal">\
		<div class="modal-content">\
			<div class="modal-header">\
				<span class="close">&times;</span>\
				<h2>Download DESTORY Demo</h2>\
			</div>\
			<div class="modal-body">\
				<p><span class="fa fa-windows"></span>&nbsp; &nbsp;Windows X64 - 0.7.22.302 Build 18754 - 57MB <button id="winBtn" class="w3-button w3-round w3-right" type="button">Download</button></p>\
				<p><span class="fa fa-linux"></span>&nbsp; &nbsp;Linux - 0.7.22 Review 2 - 46MB <button id="linBtn" class="w3-button w3-round w3-right" type="button">Download</button></p>\
			</div>\
			<div class="modal-footer">\
				<h2><a href="javascript:void(0)" onclick="redirectreqsection();">DESTORY Minimum System Requirements</a></h2>\
			</div>\
		</div>\
	</div>\
	<script src="redirectreqsection.js"></script>\
\
`);
//<p><span class="fa fa-apple"></span>&nbsp; &nbsp;MacOSX <button id="macBtn" class="w3-button w3-round w3-right w3-disabled" type="button" disabled="true">Unavailable</button></p>\
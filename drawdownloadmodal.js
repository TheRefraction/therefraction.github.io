document.write(`\
	<link rel="stylesheet" href="downloadmodal.css">\
	<div id="downloadBox" class="modal">\
		<div class="modal-content">\
			<div class="modal-header">\
				<span class="close">&times;</span>\
				<h2>Download DESTORY Demo</h2>\
			</div>\
			<div class="modal-body">\
				<p><span class="fa fa-windows"></span>&nbsp; &nbsp;Windows X64 - 0.7.21.107 Build 17964 - 51MB <button id="winBtn" class="w3-button w3-round w3-right" type="button">Download</button></p>\
				<p><span class="fa fa-linux"></span>&nbsp; &nbsp;Linux <button id="linBtn" class="w3-button w3-round w3-right w3-disabled" type="button" disabled="true">Coming soon</button></p>\
				<p><span class="fa fa-apple"></span>&nbsp; &nbsp;MacOSX <button id="macBtn" class="w3-button w3-round w3-right w3-disabled" type="button" disabled="true">Unavailable</button></p>\
			</div>\
			<div class="modal-footer">\
				<h2>Go see <a href="javascript:void(0)" onclick="redirectreqsection();">DESTORY Minimum System Requirements</a></h2>\
			</div>\
		</div>\
	</div>\
	<script src="redirectreqsection.js"></script>\
\
`);
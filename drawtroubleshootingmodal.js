document.write(`\
	<link rel="stylesheet" href="troubleshootingmodal.css">\
	<div id="t0Box" class="t_modal">\
		<div class="t_modal-content">\
			<div class="t_modal-header">\
				<span class="t_close">&times;</span>\
				<h2>Deleting your save file</h2>\
			</div>\
			<div class="t_modal-body">\
				<p><span class="fa fa-windows"></span>&nbsp;&nbsp;On Windows</p>\
				<li>Open Windows Explorer (Win + E) and type %localappdata%/DESTORY into the navigation bar.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Or you can press (Win + R) and type the same into the textbox.</li>\
				<li>You should now see a window with these files:</li>\
				<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="img/t0_scrn1.png"></p>\
				<li>Delete all files such as "fileX", "fileX.ini", "f_infoX.ini" and "destory.ini" where X is a number.</li>\
				<li>Close Windows Explorer and start the game.</li>\
				<p><span class="fa fa-linux"></span>&nbsp;&nbsp;On Linux</p>\
				<p>Coming soon</p>\
				<br>\
				<p>Congratulations! You have successfully deleted your save file!</p>\
			</div>\
		</div>\
	</div>\
\
`);
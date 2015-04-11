mui.init();
mui.plusReady(function() {
	var user = T.getItemJSON(T.KEY_USER);
	$('h3').text(user.name);
});
$('#J_ChangePassword').tap(function() {
	mui.openWindow('changePassword.html', 'changePassword.html', {
		top: mui.HEIGHT_ZERO,
		bottom: mui.HEIGHT_ZERO
	});
});
$('#J_Logout').tap(function() {
	plus.storage.clear();
	plus.webview.getLaunchWebview().loadURL('../index.html');
});

$('#J_Other').on('tap', 'a', function(e) {
	var $this = $(this);
	e.preventDefault();
	mui.openWindow('webview.html?title=' + encodeURIComponent($this.text()) + '&url=' + encodeURIComponent($this.attr('data-href')), 'webview.html', {
		top: mui.HEIGHT_ZERO,
		bottom: mui.HEIGHT_ZERO
	});
});

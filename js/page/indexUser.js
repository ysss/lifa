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
	plus.storage.removeItem(T.KEY_SID);
	plus.webview.getLaunchWebview().loadURL('../index.html');
});

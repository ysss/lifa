var tabIds = ['indexCustomer.html', 'indexUser.html'],
	styles = {
		top: mui.HEIGHT_ZERO,
		bottom: mui.HEIGHT_FOOTER
	};

mui.init({
	subpages:[{
		url: tabIds[0],
		id: tabIds[0],
		styles: styles
	}]
});

$('#J_Tab').on('tap', 'a', function() {
	var $this = $(this);
	if ($this.hasClass('mui-active')) {
		return;
	}
	var id = this.href.split('#')[1],
		webview = plus.webview,
		index = tabIds.indexOf(id);

	if (!webview.getWebviewById(id)) {
		webview.currentWebview().append(webview.create(id, id, styles));
	} else {
		webview.getWebviewById(id).show();
	}
	webview.getWebviewById(tabIds[index === 1 ? 0 : 1]).hide();
	$this.parent().children().removeClass('mui-active');
	$this.addClass('mui-active');
});

//首页返回键处理
//处理逻辑：1秒内，连续两次按返回键，则退出应用；
var first = null;
mui.back = function() {
	//首次按键，提示‘再按一次退出应用’
	if (!first) {
		first = new Date().getTime();
		mui.toast('再按一次退出应用');
		setTimeout(function() {
			first = null;
		}, 1000);
	} else {
		if (new Date().getTime() - first < 1000) {
			plus.runtime.quit();
		}
	}
	
};
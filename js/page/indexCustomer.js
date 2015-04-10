mui.init({
	subpages:[{
		url: 'customerList.html',
		id: 'customerList.html',
		styles: {
			top: 48 + $('.mui-bar').height() - 5 + 'px',
			bottom: mui.HEIGHT_ZERO
		}
	}]
});

$('#J_Add').tap(function() {
	var url = 'customerDetail.html';
	mui.openWindow({
		url: url,
		id: url,
		styles: {
			top: mui.HEIGHT_ZERO,
			bottom: mui.HEIGHT_ZERO
		}
	});
});

$('#J_Refresh').tap(function(e) {
	e.preventDefault();
	mui.fire(plus.webview.getWebviewById('customerList.html'), 'Customer:sync');
});

$(document.forms.searchForm).submit(function(e) {
	e.preventDefault();
	mui.fire(plus.webview.getWebviewById('customerList.html'), 'Customer:search', {word:this.word.value.trim()});
	return false;
}).on('tap', '.mui-icon-clear', function() {
	mui.fire(plus.webview.getWebviewById('customerList.html'), 'Customer:search', {word: ''});
});

window.addEventListener("openDetail", function(e) {
	var data = e.detail;
	mui.openWindow({
		url: 'customerDetail.html?data=' + encodeURIComponent(JSON.stringify(data)),
		id: 'customerDetail.html',
		styles: {
			top: mui.HEIGHT_ZERO,
			bottom: mui.HEIGHT_ZERO
		}
	});
});
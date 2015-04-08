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
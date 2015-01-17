var Page = {
	attach: function() {
		
	},
	
	init: function() {
		var user = mui.Storage.getItem(T.KEY_USER);
		user ? this.doLogin() : this.doIndex();
	}
}

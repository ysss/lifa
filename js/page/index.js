var Page = {
	attach: function() {
		
	},
	
	attachForm: function() {
		var form = document.forms.loginForm;
		$(form).on('input', '.J_Mobile', function() {
			if (this.value.trim().length === 11) {
				this.blur();
				form.password.focus();
			}
		}).submit(function(e) {
			var mobile = this.mobile.value.trim(),
				password = this.password.value.trim();
				
			e.preventDefault();
			if (!/^1\d{10}$/.test(mobile)) {
				mui.alert('请输入正常的手机号码');
			} else if (password.length < 6) {
				mui.alert('密码至少为6位');
			} else {
				T.post('/u/login', {
					mobile: mobile,
					password: CryptoJS.MD5(password).toString()
				}, function() {
					doLogin
				});
			}
		});
	},
	
	doLogin: function() {
		
	},
	
	doIndex: function(user) {
		var
	},
	
	init: function() {
		var user = mui.Storage.getItem(T.KEY_USER);
		user ? this.doLogin() : this.doIndex();
	}
}

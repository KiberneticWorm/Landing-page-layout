function toggle(ths, state) {
	var elem;
	if ($(ths).attr('class') == 'placeholder') {
		elem = $(ths);
		$(ths).siblings().filter('input').focus();
	} else {
		elem = $(ths).siblings().filter('.placeholder');
	}
	elem.css('visibility', state);
}

$('#name, .placeholder, #email, #message').on({
	click: function() {
		toggle(this, 'hidden');
	},
	blur: function() {
		if ($(this).val() == '') {
			toggle(this, 'visible');	
		}
	}
});
function toggle(ths, state) {
	var elem;
	if ($(ths).attr('class') == 'form__placeholder') {
		elem = $(ths);
		$(ths).siblings().filter('input').focus();
	} else {
		elem = $(ths).siblings().filter('.form__placeholder');
	}
	elem.css('visibility', state);
}

$('.form__input, .form__textarea, .form__placeholder').on({
	click: function() {
		toggle(this, 'hidden');
	},
	blur: function() {
		if ($(this).val() == '') {
			toggle(this, 'visible');	
		}
	}
});

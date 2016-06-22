var K = {
	boot:function() {
		K.s.boot();
		K.video.boot();
		K.screen.adjust();
		$(window).resize( K.screen.adjust );
	},
	screen:{
		adjust:function() {
			var w = $(window).width();
			$('.header .top').css('height', Math.min( (w * 0.45), 600 )+'px');
		}
	},
	video:{
		boot:function() {
			$('.bottom .middle').hover( K.video.play, K.video.pause );
		},
		play:function() {
			$(this).find('.hover video')[0].play();
		},
		pause:function() {
			$(this).find('.hover video')[0].pause();
		},
	},
	subscribe:{
		label:'Tu correo electrónico.',
		boot:function() { var s = K.subscribe;
			var i = s.input = $('.suscribete input');
			i.val( K.s.label );
			i.focus(s.focus);
			i.blur(s.blur);
		},
		focus:function() {
			if( K.s.input.val() == K.s.label) {
				K.s.input.val('');
			}
		},
		blur:function() {
			if( K.s.input.val() == '') {
				K.s.input.val( K.s.label );
			}
		}
	}
};
K.s = K.subscribe;
$(function() {
	K.boot();
});

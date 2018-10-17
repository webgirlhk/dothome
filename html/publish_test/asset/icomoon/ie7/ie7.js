/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-of-calendar': '&#xe902;',
		'icon-of-zap': '&#xe903;',
		'icon-of-android': '&#xe900;',
		'icon-of-eye-off': '&#xe800;',
		'icon-of-menu': '&#xe801;',
		'icon-of-x': '&#xe802;',
		'icon-of-bell': '&#xe803;',
		'icon-of-hold': '&#xe804;',
		'icon-of-edit': '&#xe805;',
		'icon-of-info': '&#xe806;',
		'icon-of-arrow-back': '&#xe807;',
		'icon-of-left-dir': '&#xe808;',
		'icon-of-right-dir': '&#xe809;',
		'icon-of-folder': '&#xe80a;',
		'icon-of-image': '&#xe80b;',
		'icon-of-grid': '&#xe80c;',
		'icon-of-search': '&#xe80d;',
		'icon-of-plus-o': '&#xe80e;',
		'icon-of-star-full': '&#xe80f;',
		'icon-of-star-empty': '&#xe810;',
		'icon-of-up-dir': '&#xe811;',
		'icon-of-down-dir': '&#xe812;',
		'icon-of-at-sign': '&#xe813;',
		'icon-of-oqapps': '&#xe814;',
		'icon-of-widget': '&#xe815;',
		'icon-of-alert': '&#xe816;',
		'icon-of-clipboard': '&#xe817;',
		'icon-of-paperclip': '&#xe818;',
		'icon-of-file-text': '&#xe819;',
		'icon-of-file': '&#xe81a;',
		'icon-of-minus-o': '&#xe81b;',
		'icon-of-upload': '&#xe81c;',
		'icon-of-twitter': '&#xe81d;',
		'icon-of-phone': '&#xe81e;',
		'icon-of-lifebuoy': '&#xe81f;',
		'icon-of-refresh': '&#xe820;',
		'icon-of-user': '&#xe821;',
		'icon-of-oval': '&#xe822;',
		'icon-of-square': '&#xe823;',
		'icon-of-flag': '&#xe824;',
		'icon-of-plus': '&#xe825;',
		'icon-of-thumbs-up': '&#xe826;',
		'icon-of-thumbs-down': '&#xe827;',
		'icon-of-minus': '&#xe828;',
		'icon-of-crown': '&#xe829;',
		'icon-of-cancel': '&#xe82a;',
		'icon-of-warning-empty': '&#xe82b;',
		'icon-of-re': '&#xe82c;',
		'icon-of-paused-o': '&#xe82d;',
		'icon-of-checked-o': '&#xe82e;',
		'icon-of-play-o': '&#xe82f;',
		'icon-of-trash-empty': '&#xe830;',
		'icon-of-globe': '&#xe831;',
		'icon-of-mail': '&#xe832;',
		'icon-of-user-sm': '&#xe833;',
		'icon-of-users': '&#xe834;',
		'icon-of-inbox': '&#xe835;',
		'icon-of-translate': '&#xe836;',
		'icon-of-cog': '&#xe837;',
		'icon-of-new': '&#xe838;',
		'icon-of-close': '&#xe839;',
		'icon-of-open': '&#xe83a;',
		'icon-of-solve': '&#xe83b;',
		'icon-of-cog-1': '&#xe83c;',
		'icon-of-user-plus': '&#xe83d;',
		'icon-of-unassigned': '&#xe83e;',
		'icon-of-sortby': '&#xe83f;',
		'icon-of-eye': '&#xe840;',
		'icon-of-googleplay': '&#xe841;',
		'icon-of-clock': '&#xe842;',
		'icon-of-right-open': '&#xe843;',
		'icon-of-instagram': '&#xe844;',
		'icon-of-right-setting': '&#xe845;',
		'icon-of-hi-five': '&#xe847;',
		'icon-of-smartphone': '&#xe848;',
		'icon-of-resend': '&#xe849;',
		'icon-of-canned-response': '&#xe84a;',
		'icon-of-no-folder': '&#xe84b;',
		'icon-of-typing': '&#xe84c;',
		'icon-of-more': '&#xe84d;',
		'icon-of-floppy': '&#xe84e;',
		'icon-of-camera': '&#xe84f;',
		'icon-of-check5': '&#xe850;',
		'icon-of-external-link': '&#xe868;',
		'icon-of-category': '&#xe869;',
		'icon-of-book': '&#xe86a;',
		'icon-of-draft': '&#xe86b;',
		'icon-of-oqwidget': '&#xe885;',
		'icon-of-portalset': '&#xe901;',
		'icon-of-telegramchat': '&#xf03d;',
		'icon-of-move': '&#xf047;',
		'icon-of-facebook': '&#xf301;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-of-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());

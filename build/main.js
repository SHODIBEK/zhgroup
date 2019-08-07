webpackJsonp([0],{

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _defineProperty2 = __webpack_require__(142);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

__webpack_require__(156);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var $window = $(window);
$(document).ready(function () {
	$('.header_top_right a').hover(function () {
		$(this).parent().addClass('hover');
	}, function () {
		$(this).parent().removeClass('hover');
	});
	$('.form-group input,.form-group textarea,.cart-group input, .career-form__block input, .career-form__texarea textarea').focus(function (e) {
		var $this = $(e.currentTarget);
		var parent = $this.parent();
		var label = parent.children("label");

		parent.addClass("focused");

		if ($this.val() !== "") {
			label.show();
		}
	}).blur(function (e) {
		var $this = $(e.currentTarget);
		var parent = $this.parent();
		var label = parent.children("label");

		if ($this.val() === "") {
			parent.removeClass("focused");
		}
		if ($this.val() !== "") {
			parent.removeClass("focused");
			label.hide();
		}
	}).change(function (e) {
		var $this = $(e.currentTarget);
		var parent = $this.parent();
		var label = parent.children("label");

		if ($this.val() !== "") {
			label.hide();
			parent.removeClass("focused");
		} else {
			label.show();
		}
	});
	$(".img a").click(function () {
		$(this).closest(".visualCaptcha-possibilities").find("a").removeClass("active").eq($(this).index());
		$(this).addClass("active");
	});

	$window.scroll(function (event) {
		if ($(window).width() <= 960) {
			var e = $('table');

			if (e.length === 1) {
				$(".swipe-table").length === 0 && $('body').append('<div class="swipe-table"><span class="swipe_table"></span></div>');

				var a = e.offset();
				var t = e.innerHeight();
				var i = a.top + t;
				var s = $(window).scrollTop() + $(window).height();

				var l = a.top + (t - 100) / 2;

				i < s && ($('.swipe-table').css({
					top: l
				}), $(".swipe-table").fadeIn("slow"), setTimeout(function () {
					$(".swipe-table").fadeOut("slow");
				}, 2500));
			}
			var topPos = $(this).scrollTop();
			// menuscroll
			var menuscroll = $('.menu-content .header-fixed');

			if (topPos > 350) {
				$(menuscroll).addClass('fixed');
			} else {
				$(menuscroll).removeClass('fixed');
			}
		}

		if ($window.width() > 960) {
			var _topPos = $(this).scrollTop();
			// menuscroll
			var _menuscroll = $('.header-fixed');

			if (_topPos > 500) {
				$(_menuscroll).addClass('fixed');
			} else {
				$(_menuscroll).removeClass('fixed');
			}

			new function () {
				var blH = $(".news-item-block h4");

				blH.each(function () {
					var $this = $(this);

					if ($this.height() > 25) {
						$this.parent().find('p').css('height', 50);
					}
				});
			}();
		}
	});

	// search
	$(".search").click(function (e) {
		e.preventDefault();
		$('.modal-search').fadeIn();
	});
	$(".modal-search-close").click(function () {
		$('.modal-search').fadeOut();
		$('input[type="search"]').val('');
	});
	// end search///
	// lamp
	var lamp = $("#lamp-bg");
	var hand = $("#hand");
	var subtitle = $(".top-slider-subtitle");

	$("#lamp-bg, #hand,.bot").on("click", function () {
		if ($(lamp).hasClass('forward')) {
			$(lamp).removeClass('forward').addClass('backward');
			setTimeout(function () {
				$(".right").fadeOut();
				$(".left").fadeOut();
				subtitle.fadeIn();
				hand.fadeIn();
			}, 500);
			$('.bot').fadeOut();
		} else {
			$(lamp).removeClass('backward').addClass('forward');
			hand.fadeOut();
			setTimeout(function () {
				subtitle.fadeOut();
				$(".bot").fadeIn();
				$(".right").fadeIn();
				$(".left").fadeIn();
			}, 1200);
		}
	});
	$(".bom").click(function () {
		var a = $(this);

		a.toggleClass("active");
		a.siblings().removeClass("active");
		a.find(".bom-subtitle").toggle();
		a.siblings().find(".bom-subtitle").slideUp();
	});

	if ($(window).width() > 960) {
		var parallaxIt = function parallaxIt(e, target, movement) {
			var $this = $('.one-top');
			var relL = e.pageX - $this.offset().left;
			var relR = e.pageX - $this.offset().right;

			TweenMax.to(target, 1, (0, _defineProperty3.default)({
				x: (relR - $this.width() / 2) / $this.width() * movement
			}, 'x', (relL - $this.width() / 2) / $this.width() * movement));
		};

		var parallaxLeft = function parallaxLeft(e, target, movement) {
			var $this = $('.one-top');
			var relX = e.pageX - $this.offset().left;

			TweenMax.to(target, 1, {
				x: (relX - $this.width() / 2) / $this.width() * movement
			});
		};
		// header menu


		// paralax
		$('.one').mousemove(function (e) {
			parallaxIt(e, ".cola", -40);
			parallaxIt(e, ".burger", -60);
			parallaxIt(e, ".free", -50);
			parallaxIt(e, ".hotdog", -40);
			parallaxIt(e, ".icecream", -70);
			parallaxIt(e, ".pizza", -60);
		});

	var mobileItem = $('.mobile-menu__item.header_top__lang, .mobile-menu__item.mobile-location').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).find('.dropdown').slideToggle();
		$(this).siblings().removeClass('active').find('.dropdown').slideUp();
	});
	$(document).mouseup(function (e) {
		var div = mobileItem;
		var hideItem = mobileItem.find('.dropdown');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			div.removeClass('active');
			hideItem.slideUp();
		}
	});
	};
	if ($(window).width() <= 960) {
		$('.header_top__region').on('click', function (e) {
			e.preventDefault();
			$(this).children('.dropdown').slideToggle();
		});
		new function () {
			var blH = $(".news-item-block h4");

			blH.each(function () {
				var $this = $(this);

				if ($this.height() > 60) {
					$this.parent().find('p').css('height', 25);
				}
			});
		}();
		$('.menu-block,.header-fixed .header_bottom__items').addClass('scrollbar-inner');
		$('.menu-block').attr('id', 'scroll');
		$('.scrollbar-inner').scrollbar();
		var liwidth = $('#scroll li').outerWidth();
		var lilength = $('#scroll li').length;
		var lifull = liwidth * lilength;
		$('.one-menu-items').css('width', lifull);

		var e = $('#scroll');

		if (e.length === 1) {
			$(".swipe-table").length === 0 && $('body').append('<div class="swipe-table"><span class="swipe_table"></span></div>');

			var a = e.offset();
			var t = e.innerHeight();
			var i = a.top + t;
			var s = $(window).scrollTop() + $(window).height();

			var l = a.top + (t - 100);

			i < s && ($('.swipe-table').css({
				top: l
			}), $(".swipe-table").fadeIn("slow"), setTimeout(function () {
				$(".swipe-table").fadeOut("slow");
			}, 2500));
		}
		$('.menu-content .header_bottom__items .one-menu-items li').on('click', function (e) {
			e.preventDefault();
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
		});

		$('.other-product__items.owl-carousel').owlCarousel({
			loop: true,
			autoplay: true,
			dots: false,
			nav: true,
			items: 1
		});
	}
	// /region open
	setTimeout(function () {
		$('.region').fadeIn();
	}, 1000);
	$("#correct, #correct2").click(function () {
		$('.region').fadeOut();
		$('.header_top__region').removeClass('active');
		$('.header_top__region .dropdown').slideUp();
		setTimeout(function () {
			$(".region").remove();
		}, 1000);
	});
	if ($window.width() > 1024) {
		$("#nocorrect").click(function () {
			$(this).addClass('active');
			$('.header_top__region .dropdown').slideDown();
			$('.header_top__region').addClass('active');
		});
		$('.header_top__region .dropdown a').click(function () {
			$('.header_top__region').removeClass('active');
			setTimeout(function () {
				$(".region").remove();
			}, 1000);
		});
	} else {
		$("#nocorrect").click(function () {
			$('.region-wrapper').fadeOut();
			$('.region-mobile').fadeIn().addClass('active');
		});
	}
	// /region open end
	// fancybox
	$('[data-fancybox="images"]').fancybox({
		openEffect: 'elastic',
		closeEffect: 'elastic',
		smallBtn: false,
		toolbar: false,
		infobar: false,
		beforeLoad: function beforeLoad() {
			var _this = this;

			var caption = $('.fancybox-caption');
			var arrows = $('.fancybox-navigation');
			var close = $('.fancybox-toolbar');
			var closeBtn = $('#closeBtn');

			close.hide();
			closeBtn.show();

			this.title = caption.text();
			caption.hide();
			arrows.hide();
			setTimeout(function () {
				_this.$content.append('<a data-fancybox-prev class="fancybox-button modal_button modal_button_left " href="javascript:;">' + '<span class="arrow-left"></span>' + '</a>'), _this.$content.append('<a data-fancybox-next class="fancybox-button modal_button modal_button_right" href="javascript:;">' + '<span class="arrow-right"></span>' + '</a>'), _this.$content.append('<button data-fancybox-close="" id="closeBtn" class="fancybox-close-small" title="Close"><span data-text="Закрыть" class="close-btn">Закрыть</span><svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"></path></svg></button>');
			}, 700);
		}
	});
	$('[data-fancybox="video"]').fancybox({
		openEffect: 'elastic',
		closeEffect: 'elastic',
		smallBtn: false,
		toolbar: false,
		infobar: false,
		beforeLoad: function beforeLoad() {
			var _this2 = this;

			var caption = $('.fancybox-caption');
			var arrows = $('.fancybox-navigation');
			var close = $('.fancybox-toolbar');
			var closeBtn = $('#closeBtn');

			close.hide();
			closeBtn.show();

			this.title = caption.text();
			caption.hide();
			arrows.hide();
			setTimeout(function () {
				_this2.$content.append('<button data-fancybox-close="" id="closeBtn" class="fancybox-close-small" title="Close"><span data-text="Закрыть" class="close-btn">Закрыть</span><svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"></path></svg></button>');
			}, 700);
		}
	});
	$('[data-fancybox="branch"]').fancybox({
		openEffect: 'elastic',
		closeEffect: 'elastic',
		smallBtn: false,
		toolbar: false,
		infobar: false,
		beforeLoad: function beforeLoad() {
			var _this3 = this;

			var caption = $('.fancybox-caption');
			var arrows = $('.fancybox-navigation');
			var close = $('.fancybox-toolbar');
			var closeBtn = $('#closeBtn');

			close.hide();
			closeBtn.show();

			this.title = caption.text();
			caption.hide();
			arrows.hide();
			setTimeout(function () {
				_this3.$content.append('<button data-fancybox-close="" id="closeBtn" class="fancybox-close-small" title="Close"><span data-text="Закрыть" class="close-btn">Закрыть</span><svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"></path></svg></button>');
			}, 700);
		}
	});
	new function () {
		var blH = $(".career-item-block h4");

		blH.each(function () {
			var $this = $(this);

			if ($this.height() > 25) {
				$this.parent().find('p').css('height', 50);
			}
		});
	}();

	$('.download-tender-item__right .link').hover(function () {
		$(this).closest('.download-tender-item').find('.download-tender__name').css('color', '#009846');
	}, function () {
		$(".download-tender__name").css("color", "#000");
	});
	$('div.branchs-tabs__items').not(':first').hide();
	$('.branchs-tabs ul').on('click', 'li:not(.active)', function () {
		$(this).addClass('active').siblings().removeClass('active').closest('div.branchs-tabs').find('div.branchs-tabs__items').hide().removeClass('active').eq($(this).index()).show().addClass('active');
	});

	$('body').find('.menu').addClass('menu-inner');

	if (!$(".menu").hasClass("menu-inner")) {
		$(".menu-content .one-menu-item").on("click", function (event) {
			event.preventDefault();
			var id = $(this).spice('/menu.html').attr("href");
			var top = $(id).offset().top;

			$('body,html').animate({ scrollTop: top }, 1000);
		});

		var lastId = 0;
		var topMenu = $('.menu-content .one-menu-items');
		var topMenuHeight = topMenu.outerHeight() + 100;
		var menuitems = topMenu.find('a');
		var scrollItems = menuitems.map(function () {
			var item = $($(this).attr('href'));

			if (item.length) {
				return item;
			}
		});

		$(window).scroll(function () {
			var fromTop = $(this).scrollTop() + topMenuHeight;
			var cur = scrollItems.map(function () {
				if ($(this).offset().top < fromTop) {
					return this;
				}
			});

			cur = cur[cur.length - 1];
			var id = cur && cur.length ? cur[0].id : "";

			if (lastId !== id) {
				lastId = id;
				menuitems.parent().removeClass("active").end().filter('[href=\'#' + id + '\']').parent().addClass("active");
			}
		});
	}

	var test2 = 0;

	$('.like').each(function (e) {
		$(this).on('click', function (e) {
			e.preventDefault();
			$(this).addClass('add');
			$(this).toggleClass('openmodal');
			var test = $(this).parent().parent().index();

			test2 = test;
			if ($(this).hasClass("add")) {
				var dataRemove = $(this).children('.tooltip').attr('data-tooltip-remove');

				$(this).children('.tooltip').text(dataRemove);
			}
			if (!$(this).hasClass('openmodal')) {
				$('.favorites-modal').fadeIn();
			}
		});
	});
	$('.delete-yes').on('click', function (e) {
		e.preventDefault();
		$(".favorites-modal").fadeOut();
		var dataAdd = $(".like").children(".tooltip").attr("data-tooltip-add");

		$(".menu-item-wrapper,.menu-card,.other-product__item").find(".menu-item,.menu-item__image").eq(test2).find(".tooltip").text(dataAdd);
		$(".menu-item-wrapper,.menu-card").find(".menu-item,.menu-item__image").eq(test2).find(".like").removeClass("add");
		$('.other-product__item').find('.menu-item__image').find('.like').removeClass('add');
	});
	$('.delete-no').on('click', function (e) {
		e.preventDefault();
		$(".favorites-modal").fadeOut();
		$(".menu-item-wrapper,.menu-card,.other-product__item").find(".menu-item,.menu-item__image").eq(test2).find(".like").addClass("openmodal");
	});

	// $('.add').click(function (e) {
	// 	e.preventDefault();
	// 	$(this).closest('.menu-item__price').addClass('add');
	// 	$(this).closest('.menu-item').addClass('active');
	// });
	// $('.plus').click(function (e) {
	// 	e.preventDefault();
	// 	var i = $(this).prev().find('.count').text();

	// 	$(this).prev().find('.count').text(i);
	// });
	// $('.minus').click(function (e) {
	// 	e.preventDefault();
	// 	var i = $(this).next().find('.count').text();

	// 	if (i < 1) {
	// 		return false;
	// 	}

	// 	$(this).next().find('.count').text(i);
	// });
	// $('.cart-item .plus').click(function (e) {
	// 	e.preventDefault();
	// 	var i = $(this).parent().find('.count').text();

	// 	if (i > 1) {
	// 		$(this).parent().find('.minus').text('').removeAttr('style');
	// 		console.log('ok');
	// 	}
	// 	var count = $(this).prev('.menu-item-info').find('.count').text();
	// 	var price = $(this).closest('.cart-item').find('.price').text();

	// 	price = parseFloat(price);
	// 	$(this).closest('.cart-item').find('.price').text(price * count);
	// });

	// $('.cart-item .minus').click(function (e) {
	// 	var _this4 = this;

	// 	e.preventDefault();
	// 	var i = $(this).parent().find('.count').text();

	// 	if ($(this).hasClass('zero')) {
	// 		$(this).closest('.cart-item').fadeOut();
	// 		setTimeout(function () {
	// 			$(_this4).closest('.cart-item').remove();
	// 		}, 1000);
	// 	} else if (i == 1) {
	// 		var dataCount = $(this).data('count-text');

	// 		$(this).text(dataCount).css('background-image', 'none').addClass('zero');
	// 	}
	// });
	// $('.cart-item .count').each(function () {
	// 	var count = $(this).text();

	// 	if (count === "1") {
	// 		var dataCount = $('.minus').data('count-text');

	// 		$(this).closest('.menu-item-info').prev('.minus').text(dataCount).css('background-image', 'none').addClass('zero');
	// 	}
	// });

	if ($(".other-product__item").length > 3) {
		$('.other-product__items.owl-carousel').owlCarousel({
			loop: true,
			autoplay: true,
			dots: false,
			nav: false,
			items: 3
		});
	}
	$('.change-region').click(function (e) {
		e.preventDefault();
		$(".header_top__region").addClass("active");
		$(".header_top__region").find(".dropdown").slideDown();
		$(document).mouseup(function (e) {
			var div = $(".header_top__region");

			if (!div.is(e.target) && div.has(e.target).length === 0) {
				div.removeClass('active');
				div.find('.dropdown').slideUp();
			}
		});
		$('html,body').animate({
            scrollTop: 0
        }, 700);
	});
	$('.header_top__region .dropdown').mouseover(function () {
		$(this).parent().removeClass("active");
	});
	$('#order').click(function (e) {
		e.preventDefault();
		$('.order-now-overlay').animate({
			left: '0px'
		}, 200);
		$('body').addClass('overflow');
	});
	$('.close').click(function () {
		$(".order-now-overlay").animate({
			left: "100%"
		}, 200);
		setTimeout(function () {
			$('body').removeClass('overflow');
		}, 250);
	});
	var onlyNumber = function onlyNumber(e) {
		var key = e.charCode || e.keyCode || 0;

		if (key === 8 || key === 9 || key === 13 || key === 46 || key === 110 || key === 190 || key >= 35 && key <= 40) {} else if (key >= 48 && key <= 57 || key >= 96 && key <= 105) {} else {
			e.preventDefault();
		}
	};
	var $phone = $('input[type="tel"]');

	$phone.keydown(onlyNumber);

	$('#yes').on('click', function () {
		$(this).attr('checked', 'checked');
		$('#no').attr('checked', false);
		$('.overlay').addClass('active');
		$('.cart-switch__input,.input-switch,.registration-switch').show();
		$('.default-page,.text-switch').hide();
		$('.cart-inner').css('padding-bottom', '106px');
	});
	$('#no').on('click', function () {
		$(this).attr('checked', 'checked');
		$('#yes').attr('checked', false);
		$('.overlay').removeClass('active');
		$('.cart-switch__input').fadeOut();
		$('.default-page,.text-switch').show();
		$('.input-switch,.registration-switch').hide();
		$('.cart-inner').removeAttr('style');
	});

	$('select').each(function () {
		var $this = $(this);
		var numberOfOptions = $(this).children("option").length;

		$this.addClass('select-hidden');
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		var $styledSelect = $this.next('div.select-styled');

		$styledSelect.text($this.children('option').eq(0).text());

		var $list = $('<ul />', {
			class: "select-options"
		}).insertAfter($styledSelect);

		for (var _i = 0; _i < numberOfOptions; _i++) {
			$('<li />', {
				text: $this.children('option').eq(_i).text(),
				rel: $this.children('option').eq(_i).attr('value')
			}).appendTo($list);
		}

		var $listItems = $list.children('li');

		$styledSelect.click(function (e) {
			e.stopPropagation();
			$('div.select-styled.active').not(this).each(function () {
				$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
		});

		$listItems.click(function (e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');

			$this.val($(this).attr('rel'));

			$styledSelect.show();
			$(this).closest('.cart-group').removeClass('active');
			$('.other-group').hide();
			$list.hide();
			$this.trigger('change').change();
		});

		$('.close-input').on('click', function () {
			$(this).closest('.cart-group').toggleClass('active');
			$('.select').toggle();
			$('.select-styled').toggle();
			$('.select-options').toggle();
		});
	});
	$('li[rel="other"]').on('click', function () {
		$(".select").hide();
		$(".other-group").show();
	});

	$('.delete-table').on('click', function () {
		var _this5 = this;

		$(this).closest('tr').fadeOut();
		setTimeout(function () {
			$(_this5).closest('tr').remove();
		}, 2000);
	});
	$('.clear-input').on('click', function (e) {
		e.preventDefault();
		$(this).closest('.form-group').find('input').val('');
		$(this).closest('.form-group').find('label').show();
	});
	$('.add-input').on('click', function (e) {
		e.preventDefault();
		var block = $(this).closest('.cabinet-installation__form').find('.copy-group').html();

		$(this).closest('.cabinet-installation__form').prepend(block);
	});
	$('.submenu').on('click', function (e) {
		$(this).find('.submenu-list').slideToggle();
		$(this).toggleClass('open_submenu');
	});
	$('#mobile-open').on('click', function (e) {
		e.preventDefault();
		var mobileOpen = $('.mobile-menu__content');
		$(this).toggleClass('change_icon');
		mobileOpen.addClass('zoomInUp animated');
		mobileOpen.fadeToggle();
		var toggleText = $(this).find('.mobile-menu__text').data('menu-open');
		$(this).find('.mobile-menu__text').data('menu-open', $(this).find('.mobile-menu__text').text()).text(toggleText);
	});

	// /textarea///
	var maxWidth = "100%";
	var maxHeight = 500;
	var minHeight = 52;

	$("textarea").on("input", function () {
		if (this.clientWidth >= maxWidth) {
			this.style.width = maxWidth;
			this.style.whiteSpace = "pre-wrap";
		}
		if (this.clientHeight > maxHeight) {
			return;
		}
		if (this.scrollHeight > this.clientHeight) {
			this.style.height = this.scrollHeight + 'px';
		}
	}).blur(function (event) {
		if ($(this).val() == "") {
			$(this).css("height", minHeight);
		}
	});

	var curHeight = 34;

	$(".career-form textarea").on("input", function () {
		if (this.clientWidth >= maxWidth) {
			this.style.width = maxWidth;
			this.style.whiteSpace = "pre-wrap";
		}
		if (this.clientHeight > maxHeight) {
			return;
		}
		if (this.scrollHeight > this.clientHeight) {
			this.style.height = this.scrollHeight + 'px';
		}
	}).blur(function (event) {
		if ($(this).val() == "") {
			$(this).css("height", curHeight);
		}
	});

	$('.reviews-item__block').on('click', function (e) {
		e.preventDefault();
		$(this).parent('a').addClass('open');
	});

	$('.collapse').on('click', function (e) {
		e.preventDefault();
		$(this).closest('a').removeClass('open');
		e.stopPropagation();
	});
	$('#recdate, #expdate, #datere, #datedis').focusin(function () {
		$(this).attr('placeholder', 'ДД/ММ/ГГ');
	});
	$('#recdate, #expdate, #datere, #datedis').focusout(function () {
		$(this).attr('placeholder', '');
	});

	$('.career-form .add-input').on('click', function (e) {
		e.preventDefault();
		var block = $(this).parent().prev().find('template');
		var clone = block.html();
		var newDiv = $(this).parent().prev();
		newDiv.append(clone);
		var idCount = '1';

		newDiv.children().find('input').each(function () {
			var b = $(this).prop('id');
			$(this).attr('id', b + idCount);
			$(this).next('label').attr('for', b + idCount);
			idCount++;
		});

		$('.career-form__block input, .career-form__texarea textarea').focus(function (e) {
			var $this = $(e.currentTarget);
			var parent = $this.parent();
			var label = parent.children("label");

			parent.addClass("focused");

			if ($this.val() !== "") {
				label.show();
			}
		}).blur(function (e) {
			var $this = $(e.currentTarget);
			var parent = $this.parent();
			var label = parent.children("label");

			if ($this.val() === "") {
				parent.removeClass("focused");
			}
			if ($this.val() !== "") {
				parent.removeClass("focused");
				label.hide();
			}
		}).change(function (e) {
			var $this = $(e.currentTarget);
			var parent = $this.parent();
			var label = parent.children("label");

			if ($this.val() !== "") {
				label.hide();
				parent.removeClass("focused");
			} else {
				label.show();
			}
		});
	});

	$('#yw0').submit(function(){
		$(this).find('input').each(function(){
			$(this).val('');
		});
	});

	$('#yw0').each(function(){
		// Объявляем переменные (форма и кнопка отправки)
		var form = $(this),
			btn = form.find('button[type="submit"]'),
			inputs = form.find('input[type="text"]:not(#other, #cate),input[type="tel"]:not(#expr),input[type="date"],input[type="phone"],textarea'),
			addInputs = form.find('.add-input');
		// Добавляем каждому проверяемому полю, указание что поле пустое
		inputs.addClass('empty_field');
		addInputs.on('click', function() {
			var prev = $(this).parent().prev();
			prev.find('input').each(function(){
				$(this).keyup(function(){
					if ( $(this).val() != "") {
						$(this).removeClass('empty_field');
					} else {
						$(this).addClass('empty_field');
					}
				});
				
				if ( $(this).val() != "" ) {
					$(this).removeClass('empty_field');
				} else {
					$(this).addClass('empty_field');
				}
			});
		});
		// Функция проверки полей формы
		function checkInput(){
			inputs.keyup(function(){
				inputs.each(function(){
					if($(this).val() != ''){
					// Если поле не пустое удаляем класс-указание
					$(this).removeClass('empty_field');
					} else {
					// Если поле пустое добавляем класс-указание
					$(this).addClass('empty_field');
					}
				});
			});
		}

		// Проверка в режиме реального времени
		setInterval(function(){
		// Запускаем функцию проверки полей на заполненность
		checkInput();
		// Считаем к-во незаполненных полей
		var sizeEmpty = form.find('.empty_field');
		var check = form.find('#checkbox');

		if ( check.is(':checked') ) {
			check.removeClass('empty_field');			
		} else {
			check.addClass('empty_field');
		}

		// form.find('.select-styled').each(function(){
		// 	if ( $(this).text() > "0") {
		// 		console.log('ok')
		// 	}
			
		// });
		
		// Вешаем условие-тригер на кнопку отправки формы
		if(sizeEmpty.length > 0){
			if(btn.hasClass('disabled')){
				btn.attr('disabled', true);
				return false
			} else {
			btn.addClass('disabled')
			btn.attr('disabled', true);
			}
		} else {
			btn.removeClass('disabled')
			btn.attr('disabled', false);
		}
		},500);
		form.find('.select-styled').each(function(){
			console.log($(this).text())
		});

		$('.select-options').children().each(function(){
			$(this).parent().prev().addClass('empty_field');
			$(this).click(function(){
				if ( $(this).attr('rel') != 0 ) {
					$(this).parent().prev().removeClass('empty_field');
				} else {
					$(this).parent().prev().addClass('empty_field');
				}
			});
		});
		// // Событие клика по кнопке отправить
		// btn.click(function(){
		// if($(this).hasClass('disabled')){
		// 	// подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
		// 	return false
		// } else {
		// 	// Все хорошо, все заполнено, отправляем форму
		// 	form.submit();
		// }
		// });
	});
});
function mobile() {
	var checkWidth = $(window).width();
	var demo = $(".three_news__items,.three_reviews__items");

	if (checkWidth > 960) {
		// demo.data('owlCarousel').destroy();
		demo.removeClass('owl-carousel');
	} else if (checkWidth < 961) {
		demo.owlCarousel({
			items: 1,
			nav: true
		});
	}
}
$(document).ready(mobile);
$(window).resize(mobile);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {

__webpack_require__(157);

var _jquery = __webpack_require__(30);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(359);

__webpack_require__(360);

__webpack_require__(361);

__webpack_require__(362);

__webpack_require__(366);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.$ = _jquery2.default;
__webpack_provided_window_dot_jQuery = _jquery2.default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * jQuery CSS Customizable Scrollbar
 *
 * Copyright 2015, Yuriy Khabarov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * If you found bug, please contact me via email <13real008@gmail.com>
 *
 * @author Yuriy Khabarov aka Gromo
 * @version 0.2.10
 * @url https://github.com/gromo/jquery.scrollbar/
 *
 */
;
(function (root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(30)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		factory(root.jQuery);
	}
})(undefined, function ($) {
	'use strict';

	// init flags & variables

	var debug = false;

	var browser = {
		data: {
			index: 0,
			name: 'scrollbar'
		},
		macosx: /mac/i.test(navigator.platform),
		mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
		overlay: null,
		scroll: null,
		scrolls: [],
		webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent)
	};

	browser.scrolls.add = function (instance) {
		this.remove(instance).push(instance);
	};
	browser.scrolls.remove = function (instance) {
		while ($.inArray(instance, this) >= 0) {
			this.splice($.inArray(instance, this), 1);
		}
		return this;
	};

	var defaults = {
		"autoScrollSize": true, // automatically calculate scrollsize
		"autoUpdate": true, // update scrollbar if content/container size changed
		"debug": false, // debug mode
		"disableBodyScroll": false, // disable body scroll if mouse over container
		"duration": 200, // scroll animate duration in ms
		"ignoreMobile": false, // ignore mobile devices
		"ignoreOverlay": false, // ignore browsers with overlay scrollbars (mobile, MacOS)
		"scrollStep": 30, // scroll step for scrollbar arrows
		"showArrows": false, // add class to show arrows
		"stepScrolling": true, // when scrolling to scrollbar mousedown position

		"scrollx": null, // horizontal scroll element
		"scrolly": null, // vertical scroll element

		"onDestroy": null, // callback function on destroy,
		"onInit": null, // callback function on first initialization
		"onScroll": null, // callback function on content scrolling
		"onUpdate": null // callback function on init/resize (before scrollbar size calculation)
	};

	var BaseScrollbar = function BaseScrollbar(container) {

		if (!browser.scroll) {
			browser.overlay = isScrollOverlaysContent();
			browser.scroll = getBrowserScrollSize();
			updateScrollbars();

			$(window).resize(function () {
				var forceUpdate = false;
				if (browser.scroll && (browser.scroll.height || browser.scroll.width)) {
					var scroll = getBrowserScrollSize();
					if (scroll.height !== browser.scroll.height || scroll.width !== browser.scroll.width) {
						browser.scroll = scroll;
						forceUpdate = true; // handle page zoom
					}
				}
				updateScrollbars(forceUpdate);
			});
		}

		this.container = container;
		this.namespace = '.scrollbar_' + browser.data.index++;
		this.options = $.extend({}, defaults, window.jQueryScrollbarOptions || {});
		this.scrollTo = null;
		this.scrollx = {};
		this.scrolly = {};

		container.data(browser.data.name, this);
		browser.scrolls.add(this);
	};

	BaseScrollbar.prototype = {

		destroy: function destroy() {

			if (!this.wrapper) {
				return;
			}

			this.container.removeData(browser.data.name);
			browser.scrolls.remove(this);

			// init variables
			var scrollLeft = this.container.scrollLeft();
			var scrollTop = this.container.scrollTop();

			this.container.insertBefore(this.wrapper).css({
				"height": "",
				"margin": "",
				"max-height": ""
			}).removeClass('scroll-content scroll-scrollx_visible scroll-scrolly_visible').off(this.namespace).scrollLeft(scrollLeft).scrollTop(scrollTop);

			this.scrollx.scroll.removeClass('scroll-scrollx_visible').find('div').andSelf().off(this.namespace);
			this.scrolly.scroll.removeClass('scroll-scrolly_visible').find('div').andSelf().off(this.namespace);

			this.wrapper.remove();

			$(document).add('body').off(this.namespace);

			if ($.isFunction(this.options.onDestroy)) {
				this.options.onDestroy.apply(this, [this.container]);
			}
		},
		init: function init(options) {

			// init variables
			var S = this,
			    c = this.container,
			    cw = this.containerWrapper || c,
			    namespace = this.namespace,
			    o = $.extend(this.options, options || {}),
			    s = { x: this.scrollx, y: this.scrolly },
			    w = this.wrapper;

			var initScroll = {
				"scrollLeft": c.scrollLeft(),
				"scrollTop": c.scrollTop()
			};

			// do not init if in ignorable browser
			if (browser.mobile && o.ignoreMobile || browser.overlay && o.ignoreOverlay || browser.macosx && !browser.webkit // still required to ignore nonWebKit browsers on Mac
			) {
					return false;
				}

			// init scroll container
			if (!w) {
				this.wrapper = w = $('<div>').addClass('scroll-wrapper').addClass(c.attr('class')).css('position', c.css('position') == 'absolute' ? 'absolute' : 'relative').insertBefore(c).append(c);

				if (c.is('textarea')) {
					this.containerWrapper = cw = $('<div>').insertBefore(c).append(c);
					w.addClass('scroll-textarea');
				}

				cw.addClass('scroll-content').css({
					"height": "auto",
					"margin-bottom": browser.scroll.height * -1 + 'px',
					"margin-right": browser.scroll.width * -1 + 'px',
					"max-height": ""
				});

				c.on('scroll' + namespace, function (event) {
					if ($.isFunction(o.onScroll)) {
						o.onScroll.call(S, {
							"maxScroll": s.y.maxScrollOffset,
							"scroll": c.scrollTop(),
							"size": s.y.size,
							"visible": s.y.visible
						}, {
							"maxScroll": s.x.maxScrollOffset,
							"scroll": c.scrollLeft(),
							"size": s.x.size,
							"visible": s.x.visible
						});
					}
					s.x.isVisible && s.x.scroll.bar.css('left', c.scrollLeft() * s.x.kx + 'px');
					s.y.isVisible && s.y.scroll.bar.css('top', c.scrollTop() * s.y.kx + 'px');
				});

				/* prevent native scrollbars to be visible on #anchor click */
				w.on('scroll' + namespace, function () {
					w.scrollTop(0).scrollLeft(0);
				});

				if (o.disableBodyScroll) {
					var handleMouseScroll = function handleMouseScroll(event) {
						isVerticalScroll(event) ? s.y.isVisible && s.y.mousewheel(event) : s.x.isVisible && s.x.mousewheel(event);
					};
					w.on('MozMousePixelScroll' + namespace, handleMouseScroll);
					w.on('mousewheel' + namespace, handleMouseScroll);

					if (browser.mobile) {
						w.on('touchstart' + namespace, function (event) {
							var touch = event.originalEvent.touches && event.originalEvent.touches[0] || event;
							var originalTouch = {
								"pageX": touch.pageX,
								"pageY": touch.pageY
							};
							var originalScroll = {
								"left": c.scrollLeft(),
								"top": c.scrollTop()
							};
							$(document).on('touchmove' + namespace, function (event) {
								var touch = event.originalEvent.targetTouches && event.originalEvent.targetTouches[0] || event;
								c.scrollLeft(originalScroll.left + originalTouch.pageX - touch.pageX);
								c.scrollTop(originalScroll.top + originalTouch.pageY - touch.pageY);
								event.preventDefault();
							});
							$(document).on('touchend' + namespace, function () {
								$(document).off(namespace);
							});
						});
					}
				}
				if ($.isFunction(o.onInit)) {
					o.onInit.apply(this, [c]);
				}
			} else {
				cw.css({
					"height": "auto",
					"margin-bottom": browser.scroll.height * -1 + 'px',
					"margin-right": browser.scroll.width * -1 + 'px',
					"max-height": ""
				});
			}

			// init scrollbars & recalculate sizes
			$.each(s, function (d, scrollx) {

				var scrollCallback = null;
				var scrollForward = 1;
				var scrollOffset = d === 'x' ? 'scrollLeft' : 'scrollTop';
				var scrollStep = o.scrollStep;
				var scrollTo = function scrollTo() {
					var currentOffset = c[scrollOffset]();
					c[scrollOffset](currentOffset + scrollStep);
					if (scrollForward == 1 && currentOffset + scrollStep >= scrollToValue) currentOffset = c[scrollOffset]();
					if (scrollForward == -1 && currentOffset + scrollStep <= scrollToValue) currentOffset = c[scrollOffset]();
					if (c[scrollOffset]() == currentOffset && scrollCallback) {
						scrollCallback();
					}
				};
				var scrollToValue = 0;

				if (!scrollx.scroll) {

					scrollx.scroll = S._getScroll(o['scroll' + d]).addClass('scroll-' + d);

					if (o.showArrows) {
						scrollx.scroll.addClass('scroll-element_arrows_visible');
					}

					scrollx.mousewheel = function (event) {

						if (!scrollx.isVisible || d === 'x' && isVerticalScroll(event)) {
							return true;
						}
						if (d === 'y' && !isVerticalScroll(event)) {
							s.x.mousewheel(event);
							return true;
						}

						var delta = event.originalEvent.wheelDelta * -1 || event.originalEvent.detail;
						var maxScrollValue = scrollx.size - scrollx.visible - scrollx.offset;

						if (delta > 0 && scrollToValue < maxScrollValue || delta < 0 && scrollToValue > 0) {
							scrollToValue = scrollToValue + delta;
							if (scrollToValue < 0) scrollToValue = 0;
							if (scrollToValue > maxScrollValue) scrollToValue = maxScrollValue;

							S.scrollTo = S.scrollTo || {};
							S.scrollTo[scrollOffset] = scrollToValue;
							setTimeout(function () {
								if (S.scrollTo) {
									c.stop().animate(S.scrollTo, 240, 'linear', function () {
										scrollToValue = c[scrollOffset]();
									});
									S.scrollTo = null;
								}
							}, 1);
						}

						event.preventDefault();
						return false;
					};

					scrollx.scroll.on('MozMousePixelScroll' + namespace, scrollx.mousewheel).on('mousewheel' + namespace, scrollx.mousewheel).on('mouseenter' + namespace, function () {
						scrollToValue = c[scrollOffset]();
					});

					// handle arrows & scroll inner mousedown event
					scrollx.scroll.find('.scroll-arrow, .scroll-element_track').on('mousedown' + namespace, function (event) {

						if (event.which != 1) // lmb
							return true;

						scrollForward = 1;

						var data = {
							"eventOffset": event[d === 'x' ? 'pageX' : 'pageY'],
							"maxScrollValue": scrollx.size - scrollx.visible - scrollx.offset,
							"scrollbarOffset": scrollx.scroll.bar.offset()[d === 'x' ? 'left' : 'top'],
							"scrollbarSize": scrollx.scroll.bar[d === 'x' ? 'outerWidth' : 'outerHeight']()
						};
						var timeout = 0,
						    timer = 0;

						if ($(this).hasClass('scroll-arrow')) {
							scrollForward = $(this).hasClass("scroll-arrow_more") ? 1 : -1;
							scrollStep = o.scrollStep * scrollForward;
							scrollToValue = scrollForward > 0 ? data.maxScrollValue : 0;
						} else {
							scrollForward = data.eventOffset > data.scrollbarOffset + data.scrollbarSize ? 1 : data.eventOffset < data.scrollbarOffset ? -1 : 0;
							scrollStep = Math.round(scrollx.visible * 0.75) * scrollForward;
							scrollToValue = data.eventOffset - data.scrollbarOffset - (o.stepScrolling ? scrollForward == 1 ? data.scrollbarSize : 0 : Math.round(data.scrollbarSize / 2));
							scrollToValue = c[scrollOffset]() + scrollToValue / scrollx.kx;
						}

						S.scrollTo = S.scrollTo || {};
						S.scrollTo[scrollOffset] = o.stepScrolling ? c[scrollOffset]() + scrollStep : scrollToValue;

						if (o.stepScrolling) {
							scrollCallback = function scrollCallback() {
								scrollToValue = c[scrollOffset]();
								clearInterval(timer);
								clearTimeout(timeout);
								timeout = 0;
								timer = 0;
							};
							timeout = setTimeout(function () {
								timer = setInterval(scrollTo, 40);
							}, o.duration + 100);
						}

						setTimeout(function () {
							if (S.scrollTo) {
								c.animate(S.scrollTo, o.duration);
								S.scrollTo = null;
							}
						}, 1);

						return S._handleMouseDown(scrollCallback, event);
					});

					// handle scrollbar drag'n'drop
					scrollx.scroll.bar.on('mousedown' + namespace, function (event) {

						if (event.which != 1) // lmb
							return true;

						var eventPosition = event[d === 'x' ? 'pageX' : 'pageY'];
						var initOffset = c[scrollOffset]();

						scrollx.scroll.addClass('scroll-draggable');

						$(document).on('mousemove' + namespace, function (event) {
							var diff = parseInt((event[d === 'x' ? 'pageX' : 'pageY'] - eventPosition) / scrollx.kx, 10);
							c[scrollOffset](initOffset + diff);
						});

						return S._handleMouseDown(function () {
							scrollx.scroll.removeClass('scroll-draggable');
							scrollToValue = c[scrollOffset]();
						}, event);
					});
				}
			});

			// remove classes & reset applied styles
			$.each(s, function (d, scrollx) {
				var scrollClass = 'scroll-scroll' + d + '_visible';
				var scrolly = d == "x" ? s.y : s.x;

				scrollx.scroll.removeClass(scrollClass);
				scrolly.scroll.removeClass(scrollClass);
				cw.removeClass(scrollClass);
			});

			// calculate init sizes
			$.each(s, function (d, scrollx) {
				$.extend(scrollx, d == "x" ? {
					"offset": parseInt(c.css('left'), 10) || 0,
					"size": c.prop('scrollWidth'),
					"visible": w.width()
				} : {
					"offset": parseInt(c.css('top'), 10) || 0,
					"size": c.prop('scrollHeight'),
					"visible": w.height()
				});
			});

			// update scrollbar visibility/dimensions
			this._updateScroll('x', this.scrollx);
			this._updateScroll('y', this.scrolly);

			if ($.isFunction(o.onUpdate)) {
				o.onUpdate.apply(this, [c]);
			}

			// calculate scroll size
			$.each(s, function (d, scrollx) {

				var cssOffset = d === 'x' ? 'left' : 'top';
				var cssFullSize = d === 'x' ? 'outerWidth' : 'outerHeight';
				var cssSize = d === 'x' ? 'width' : 'height';
				var offset = parseInt(c.css(cssOffset), 10) || 0;

				var AreaSize = scrollx.size;
				var AreaVisible = scrollx.visible + offset;

				var scrollSize = scrollx.scroll.size[cssFullSize]() + (parseInt(scrollx.scroll.size.css(cssOffset), 10) || 0);

				if (o.autoScrollSize) {
					scrollx.scrollbarSize = parseInt(scrollSize * AreaVisible / AreaSize, 10);
					scrollx.scroll.bar.css(cssSize, scrollx.scrollbarSize + 'px');
				}

				scrollx.scrollbarSize = scrollx.scroll.bar[cssFullSize]();
				scrollx.kx = (scrollSize - scrollx.scrollbarSize) / (AreaSize - AreaVisible) || 1;
				scrollx.maxScrollOffset = AreaSize - AreaVisible;
			});

			c.scrollLeft(initScroll.scrollLeft).scrollTop(initScroll.scrollTop).trigger('scroll');
		},

		/**
   * Get scrollx/scrolly object
   *
   * @param {Mixed} scroll
   * @returns {jQuery} scroll object
   */
		_getScroll: function _getScroll(scroll) {
			var types = {
				advanced: ['<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', // required! used for scrollbar size calculation !
				'<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', // used for handling scrollbar click
				'<div class="scroll-element_inner-bottom"></div>', '</div>', '</div>', '<div class="scroll-bar">', // required
				'<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', '</div>', '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', '</div>', '</div>', '</div>'].join(''),
				simple: ['<div class="scroll-element">', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', // required! used for scrollbar size calculation !
				'<div class="scroll-element_track"></div>', // used for handling scrollbar click
				'<div class="scroll-bar"></div>', // required
				'</div>', '</div>'].join('')
			};
			if (types[scroll]) {
				scroll = types[scroll];
			}
			if (!scroll) {
				scroll = types['simple'];
			}
			if (typeof scroll == 'string') {
				scroll = $(scroll).appendTo(this.wrapper);
			} else {
				scroll = $(scroll);
			}
			$.extend(scroll, {
				bar: scroll.find('.scroll-bar'),
				size: scroll.find('.scroll-element_size'),
				track: scroll.find('.scroll-element_track')
			});
			return scroll;
		},

		_handleMouseDown: function _handleMouseDown(callback, event) {

			var namespace = this.namespace;

			$(document).on('blur' + namespace, function () {
				$(document).add('body').off(namespace);
				callback && callback();
			});
			$(document).on('dragstart' + namespace, function (event) {
				event.preventDefault();
				return false;
			});
			$(document).on('mouseup' + namespace, function () {
				$(document).add('body').off(namespace);
				callback && callback();
			});
			$('body').on('selectstart' + namespace, function (event) {
				event.preventDefault();
				return false;
			});

			event && event.preventDefault();
			return false;
		},

		_updateScroll: function _updateScroll(d, scrollx) {

			var container = this.container,
			    containerWrapper = this.containerWrapper || container,
			    scrollClass = 'scroll-scroll' + d + '_visible',
			    scrolly = d === 'x' ? this.scrolly : this.scrollx,
			    offset = parseInt(this.container.css(d === 'x' ? 'left' : 'top'), 10) || 0,
			    wrapper = this.wrapper;

			var AreaSize = scrollx.size;
			var AreaVisible = scrollx.visible + offset;

			scrollx.isVisible = AreaSize - AreaVisible > 1; // bug in IE9/11 with 1px diff
			if (scrollx.isVisible) {
				scrollx.scroll.addClass(scrollClass);
				scrolly.scroll.addClass(scrollClass);
				containerWrapper.addClass(scrollClass);
			} else {
				scrollx.scroll.removeClass(scrollClass);
				scrolly.scroll.removeClass(scrollClass);
				containerWrapper.removeClass(scrollClass);
			}

			if (d === 'y') {
				if (container.is('textarea') || AreaSize < AreaVisible) {
					containerWrapper.css({
						"height": AreaVisible + browser.scroll.height + 'px',
						"max-height": "none"
					});
				} else {
					containerWrapper.css({
						//"height": "auto", // do not reset height value: issue with height:100%!
						"max-height": AreaVisible + browser.scroll.height + 'px'
					});
				}
			}

			if (scrollx.size != container.prop('scrollWidth') || scrolly.size != container.prop('scrollHeight') || scrollx.visible != wrapper.width() || scrolly.visible != wrapper.height() || scrollx.offset != (parseInt(container.css('left'), 10) || 0) || scrolly.offset != (parseInt(container.css('top'), 10) || 0)) {
				$.extend(this.scrollx, {
					"offset": parseInt(container.css('left'), 10) || 0,
					"size": container.prop('scrollWidth'),
					"visible": wrapper.width()
				});
				$.extend(this.scrolly, {
					"offset": parseInt(container.css('top'), 10) || 0,
					"size": this.container.prop('scrollHeight'),
					"visible": wrapper.height()
				});
				this._updateScroll(d === 'x' ? 'y' : 'x', scrolly);
			}
		}
	};

	var CustomScrollbar = BaseScrollbar;

	/*
     * Extend jQuery as plugin
     *
     * @param {Mixed} command to execute
     * @param {Mixed} arguments as Array
     * @return {jQuery}
     */
	$.fn.scrollbar = function (command, args) {
		if (typeof command !== 'string') {
			args = command;
			command = 'init';
		}
		if (typeof args === 'undefined') {
			args = [];
		}
		if (!$.isArray(args)) {
			args = [args];
		}
		this.not('body, .scroll-wrapper').each(function () {
			var element = $(this),
			    instance = element.data(browser.data.name);
			if (instance || command === 'init') {
				if (!instance) {
					instance = new CustomScrollbar(element);
				}
				if (instance[command]) {
					instance[command].apply(instance, args);
				}
			}
		});
		return this;
	};

	/**
  * Connect default options to global object
  */
	$.fn.scrollbar.options = defaults;

	/**
  * Check if scroll content/container size is changed
  */

	var updateScrollbars = function () {
		var timer = 0,
		    timerCounter = 0;

		return function (force) {
			var i, container, options, scroll, wrapper, scrollx, scrolly;
			for (i = 0; i < browser.scrolls.length; i++) {
				scroll = browser.scrolls[i];
				container = scroll.container;
				options = scroll.options;
				wrapper = scroll.wrapper;
				scrollx = scroll.scrollx;
				scrolly = scroll.scrolly;
				if (force || options.autoUpdate && wrapper && wrapper.is(':visible') && (container.prop('scrollWidth') != scrollx.size || container.prop('scrollHeight') != scrolly.size || wrapper.width() != scrollx.visible || wrapper.height() != scrolly.visible)) {
					scroll.init();

					if (options.debug) {
						window.console && console.log({
							scrollHeight: container.prop('scrollHeight') + ':' + scroll.scrolly.size,
							scrollWidth: container.prop('scrollWidth') + ':' + scroll.scrollx.size,
							visibleHeight: wrapper.height() + ':' + scroll.scrolly.visible,
							visibleWidth: wrapper.width() + ':' + scroll.scrollx.visible
						}, true);
						timerCounter++;
					}
				}
			}
			if (debug && timerCounter > 10) {
				window.console && console.log('Scroll updates exceed 10');
				updateScrollbars = function updateScrollbars() {};
			} else {
				clearTimeout(timer);
				timer = setTimeout(updateScrollbars, 300);
			}
		};
	}();

	/* ADDITIONAL FUNCTIONS */
	/**
  * Get native browser scrollbar size (height/width)
  *
  * @param {Boolean} actual size or CSS size, default - CSS size
  * @returns {Object} with height, width
  */
	function getBrowserScrollSize(actualSize) {

		if (browser.webkit && !actualSize) {
			return {
				"height": 0,
				"width": 0
			};
		}

		if (!browser.data.outer) {
			var css = {
				"border": "none",
				"box-sizing": "content-box",
				"height": "200px",
				"margin": "0",
				"padding": "0",
				"width": "200px"
			};
			browser.data.inner = $("<div>").css($.extend({}, css));
			browser.data.outer = $("<div>").css($.extend({
				"left": "-1000px",
				"overflow": "scroll",
				"position": "absolute",
				"top": "-1000px"
			}, css)).append(browser.data.inner).appendTo("body");
		}

		browser.data.outer.scrollLeft(1000).scrollTop(1000);

		return {
			"height": Math.ceil(browser.data.outer.offset().top - browser.data.inner.offset().top || 0),
			"width": Math.ceil(browser.data.outer.offset().left - browser.data.inner.offset().left || 0)
		};
	}

	/**
  * Check if native browser scrollbars overlay content
  *
  * @returns {Boolean}
  */
	function isScrollOverlaysContent() {
		var scrollSize = getBrowserScrollSize(true);
		return !(scrollSize.height || scrollSize.width);
	}

	function isVerticalScroll(event) {
		var e = event.originalEvent;
		if (e.axis && e.axis === e.HORIZONTAL_AXIS) return false;
		if (e.wheelDeltaX) return false;
		return true;
	}

	/**
  * Extend AngularJS as UI directive
  * and expose a provider for override default config
  *
  */
	if (window.angular) {
		(function (angular) {
			angular.module('jQueryScrollbar', []).provider('jQueryScrollbar', function () {
				var defaultOptions = defaults;
				return {
					setOptions: function setOptions(options) {
						angular.extend(defaultOptions, options);
					},
					$get: function $get() {
						return {
							options: angular.copy(defaultOptions)
						};
					}
				};
			}).directive('jqueryScrollbar', ['jQueryScrollbar', '$parse', function (jQueryScrollbar, $parse) {
				return {
					"restrict": "AC",
					"link": function link(scope, element, attrs) {
						var model = $parse(attrs.jqueryScrollbar),
						    options = model(scope);
						element.scrollbar(options || jQueryScrollbar.options).on('$destroy', function () {
							element.scrollbar('destroy');
						});
					}
				};
			}]);
		})(window.angular);
	}
});

/***/ })

},[141]);
//# sourceMappingURL=main.js.map
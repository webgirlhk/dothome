

//imageProgress
function imagesProgress(){
	var $container = $("#progress"),
		$progressBar = $container.find(".progress-bar"),
		$progressText = $container.find(".progress-text"),
		imgLoad = imagesLoaded("body"),	
		imgTotal = imgLoad.images.length,	
		imgLoaded = 0,										
		current = 0,							
		progressTimer = setInterval(updateProgress, 1000 / 60);
	
	imgLoad.on("progress", function(){
		imgLoaded++;
	});

	function updateProgress(){
		var target = ( imgLoaded / imgTotal) * 100;
		
		current += ( target - current) * 0.1;
		$progressBar.css({ width: current + '%' });
		$progressText.text( Math.floor(current) + '%' );
		
		if(current >= 100){
			clearInterval(progressTimer);
			$container.addClass("progress-complete");
			$progressBar.add($progressText)
				.delay(500)
				.animate({opacity: 0},250,function(){
					$container.animate({top: '-100%'},1000,'easeInOutQuint');
				});
			$("body").addClass("active");
		}
		if(current > 99.9){
			current = 100;
		}
		
	}	
}

//parallax 
var dot = $(".dot ul li");
var cont = $("#contents > div");

dot.click(function(e){
	e.preventDefault();
	var target = $(this);
	var index = target.index();
	var section = cont.eq(index);
	var offset = section.offset().top;
	offset = parseInt(offset);	
	$("html,body").animate({ scrollTop:offset },600,"easeInOutExpo");
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	wScroll = parseInt(wScroll);

	if(wScroll > $(window).height()/2 ){
		$(".site").addClass("hide");
		$(".sns").addClass("hide");
		$(".dot").removeClass("hide");
	} else {
		$(".site").removeClass("hide");
		$(".sns").removeClass("hide");
		$(".dot").addClass("hide");
	}
	
	if(wScroll >= cont.eq(0).offset().top){
		dot.removeClass("active");
		dot.eq(0).addClass("active");
	}
	if(wScroll >= cont.eq(1).offset().top){
		dot.removeClass("active");
		dot.eq(1).addClass("active");
	}
	if(wScroll >= cont.eq(2).offset().top){
		dot.removeClass("active");
		dot.eq(2).addClass("active");
	}
	if(wScroll >= cont.eq(3).offset().top){
		dot.removeClass("active");
		dot.eq(3).addClass("active");
	}
	if(wScroll >= cont.eq(4).offset().top){
		dot.removeClass("active");
		dot.eq(4).addClass("active");
	}
	if(wScroll >= cont.eq(5).offset().top){
		dot.removeClass("active");
		dot.eq(5).addClass("active");
	}
});






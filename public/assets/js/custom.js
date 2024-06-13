 // Banne img Carousel
 $('#banner-img-carousel').owlCarousel({
	loop:true,
	margin:30,
	nav:false,
    dots:false,
	autoplay:true,
	autoplayTimeout:3000,
	responsive:{
	  0:{
		items:1
	  }, 
	  1000:{
		items:1
	  }
	}
  }); 

  // Sneakpeek Carousel
 $('#sneakpeek-carousel').owlCarousel({
	loop:true,
	margin:30,
	nav:false,
    dots:true,
	autoplay:true,
	autoplayTimeout:3000,
	responsive:{
	  0:{
		items:1,
		dots:false,
	  },
	  576:{
		items:2
	  },
	  768:{
		items:3
	  },
	  1000:{
		items:4
	  }
	}
  }); 

 // Team Carousel
 $('#team-carousel').owlCarousel({
	loop:true,
	margin:30,
	nav:false,
    dots:true,
	stagePadding: 70,
	autoplay:true,
	autoplayTimeout:3000,
	responsive:{
	  0:{
		items:1,
		stagePadding: 0,
	  }, 
	  768:{
		items:2,
		stagePadding: 0,
	  },
	  1000:{
		items:3
	  },
	  1600:{
		items:4
	  }
	}
  }); 

   // Menu Sticky 
 $(window).scroll(function() {
	var sticky = $('.topTeam'),
	  scroll = $(window).scrollTop();
	 
	if (scroll >= 40) { 
	  sticky.addClass('headerSticky'); }
	else { 
	 sticky.removeClass('headerSticky');
  
  }
  });

  // Mobile Mode Menu Close 
  $(".closeSideBar").on('click', function (e){
    if($("#navbarSupportedContent").hasClass("show")){
      $("#navbarSupportedContent").removeClass("show")
    }
  })

$('a[href^="#"]').on("click", function(event) {
	var id = $(this).attr("href");
	var target = $(id).offset().top - 30;
	$('html, body').animate({scrollTop:target}, 500);
	event.preventDefault();
	});

function getTargetTop(elem){
	var id = elem.attr("href");
	var offset = 300;
	return $(id).offset().top - offset;
}

$(".navbar-nav li a").on("click", function() {
$(".navbar-nav li a").removeClass("active");
$(this).addClass("active");
});
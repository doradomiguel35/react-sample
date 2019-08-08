import $ from 'jquery';

$(document).ready(()=>{
	let homePage = 'practice.template – Practice site'; //Change every domain change

	function stickyNavBehavior(event){
		var scroll = $(window).scrollTop();
		var windowWidth = $(window).width();
		var navSpacing = 'uk-margin-medium-top uk-margin-medium-left uk-margin-medium-right uk-margin-medium-bottom';

		if(scroll > 37){
			$('#kyokushin-navbar').removeClass(navSpacing);
			$('#kyokushin-navbar').css('width','100%');
			$('#kyokushin-navbar').css('transition','all 1s ease');
			$('.uk-navbar-center').css('width', '');

		}

		else if(scroll === 0 && windowWidth <= 768){
			$('#kyokushin-navbar').addClass(navSpacing);
			$('#kyokushin-navbar').css('width', '89%');
			$('.uk-navbar-center').css('width', '80%');
		}

		else if(scroll === 0 && windowWidth > 768){
			$('#kyokushin-navbar').addClass(navSpacing);
			$('#kyokushin-navbar').css('width', '93%');

		}

		else if(windowWidth >= 1440){
			$('#kyokushin-navbar').css('width', '93%');
		}

		else if(windowWidth <= 425){
			$('#kyokushin-navbar').css('width', '81%');
		}


	}

	function navLogoBehavior(event){
		var windowWidth = $(window).width();
		var parentNavCenter = $('.nav-logo').parent().parent().parent();
		var navCenter = 'uk-navbar-center';
		
		if(windowWidth <= 768){
			parentNavCenter.removeClass(navCenter);
			parentNavCenter.addClass('uk-navbar-left uk-margin-small-left');
		}

		else{
			parentNavCenter.removeClass();
			parentNavCenter.addClass(navCenter);
		}
	}

	function goToTitle(){
		var hash = '#content-direct';	
		var scroll = $(window).scrollTop();
		console.log(scroll);

		try{
			if(scroll === 0){
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 1200, function(){
					window.location.hash = hash;
				});	
			}
		}
		catch(e){
			console.log(e);
			$('html,body').css('scroll-behavior', 'smooth');
		}
		
	}

	function styleLogout(){
		$('a:contains(Log out?)').css('border: 1px solid #91BED4;padding: 1.5%;border-radius: 13px;background-color: #91BED4;cursor: pointer;color: #000000;');
	}

	function responsiveLayout(){
		var windowWidth = $(window).width();
		var moreBlogsItems = '.uk-width-large.uk-margin-medium-left.uk-grid-margin.uk-first-column';
		
		if(windowWidth <= 1024){
			$(moreBlogsItems).removeClass('uk-margin-medium-left');
		}
	}


	//CALL FUNCTIONS ON INITIAL OPENING OF SITE
	styleLogout();
	goToTitle();
	stickyNavBehavior();
	navLogoBehavior();
	responsiveLayout();
	//remove corresponsing attributes from wordpress featured images
	
	$('img').attr('width',''); 
	$('img').attr('height','');
	$('img').attr('sizes','');
	

	//EVENTS
	$(window).scroll(stickyNavBehavior);
	$(window).resize(navLogoBehavior,responsiveLayout);
	$('#redirectToTitle').click(goToTitle);
});
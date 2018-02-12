// must have jQuery library included

// same code for all buttons
jQuery(document).ready(function($) {
  // when user clicks button, toggle the "open" class
  jQuery('.lines').click(function(){
    // hamburger button
    jQuery(this).toggleClass('open');
    // menu area
    jQuery('.nav-wrap').toggleClass('open');
    // body area
    jQuery('.width-wrap').toggleClass('open');
  });

  // scrolling header
  jQuery(document).on('scroll',function(){			
		if(jQuery(document).scrollTop()>30) {
			jQuery('header').addClass('small');
		} else{
			jQuery('header').removeClass('small');
		}
	});
});
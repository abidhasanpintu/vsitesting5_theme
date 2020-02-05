
require(['jquery'],function($){

jQuery(document).ready(function() { 
    
    jQuery(".productSpecialTitle,.block-content .product-name a,.box-up-sell .product-name a").each(function () {
        jQuery(this).html( jQuery(this).html().replace("Â®","<sup>Â®</sup>") );
        jQuery(this).html( jQuery(this).html().replace("â€ ","<sup>â€ </sup>") );
        jQuery(this).html( jQuery(this).html().replace("â„¢","<sup>â„¢</sup>") );

    });
 });

/** * Code for dropdown menu items * **/
jQuery(document).on('click','.has_dropdown',function(){
	jQuery('.has_dropdown').each(function(key,val){
		var currentEL = jQuery(this).parent('li').children('.dropdown_content').children('.dropdown-menu');

		if(!currentEL.is(':hidden')){
            currentEL.slideUp(200);
		}
	});
	var currentEL = jQuery(this).parent('li').children('.dropdown_content').children('.dropdown-menu');
	if (currentEL.is(':hidden')){
		currentEL.slideDown(200);
	}else{
		currentEL.slideUp(200);
	}

});

var mouse_is_inside = false;
jQuery(document).ready(function()
{
    jQuery('.dropdown-menu').hover(function(){ 
        mouse_is_inside=true; 
    }, function(){ 
        mouse_is_inside=false; 
    });

    jQuery("body").click(function(){ 
        if(! mouse_is_inside) jQuery('.dropdown-menu').slideUp(200);
    });
});



jQuery(document).ready(function(){

    jQuery('.thumbanil_image li').each(function(){
         var imgSrc = jQuery(this).children('a').attr('data-thumbnail');
        if (typeof imgSrc !== typeof undefined && imgSrc !== false) { jQuery('<img/>')[0].src = jQuery(this).children('a').attr('data-thumbnail')}
    });
    
});

jQuery(document).on('mouseover','.thumbanil_image li a',function(){
    var imgSrc = jQuery(this).attr('data-thumbnail');
    
    if (typeof imgSrc !== typeof undefined && imgSrc !== false) {
         jQuery('.right_thumbnail').css('opacity','1');
         jQuery('.right_thumbnail').attr('src',imgSrc);
    }else{
      jQuery('.right_thumbnail').css('opacity','0');
    }

});


jQuery(document).on('click', '.aboutUsPage a[href^="/about-us/#"]', function (event) {
   event.preventDefault();
    
var get_id = jQuery(this).attr("href");
get_id = get_id.split("#")[1];
console.log(get_id);

    jQuery('html, body').animate({
        scrollTop:jQuery('#'+get_id).offset().top-90
    }, 'slow');
    
});


jQuery(document).on('change','.autoShip .switch input',function(){
  if(jQuery(this).is(':checked')){
      jQuery(this).closest('#recurring-options').find('.rsp-subscription').show();
      jQuery(this).closest('#recurring-options').find('.rsp-subscription select').attr('size','4');
      jQuery(this).closest('#recurring-options').find('.rsp-subscription select option:nth-child(1)').attr('selected','selected');
  }else{
      jQuery(this).closest('#recurring-options').find('.rsp-subscription select option:nth-child(1)').attr('selected','selected');
      jQuery(this).closest('#recurring-options').find('.rsp-subscription').hide();
  }
   
});


jQuery(document).on('click','#liveChat',function(){
   jQuery('.dropdown-menu').slideUp(200);
});

/*
jQuery(document).on('click','.collapse_btn',function(){
	jQuery('.main-nav2').toggle(200);
});
*/
jQuery('.collapse_btn').click(function(){
	jQuery('.main-nav2').toggle(200);
});
	




});


(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(document).on('click','#social_button ',function() {
        	$('#social_register').toggleClass('social_register_hidden social_register_active');
        });

        $(document).on('click', '#lang-select', function(){
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
        });
    });


}(jQuery));	
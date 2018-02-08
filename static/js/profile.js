(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        window.setTimeout(function() {
            $(".alert").fadeTo(500, 0).slideUp(500, function(){
                $(this).remove(); 
            });
        }, 10000);

        $("#inv-amount").on("change paste keyup", function() {
           $('#prof-value1').text(($(this).val()*0.03*1).toString().substring(0, 8));
           $('#prof-value2').text(($(this).val()*0.03*30).toString().substring(0, 8));
           $('#prof-value3').text(($(this).val()*0.03*365).toString().substring(0, 8));
        });

    });



}(jQuery));	
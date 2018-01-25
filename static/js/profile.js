(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        window.setTimeout(function() {
            $(".alert").fadeTo(500, 0).slideUp(500, function(){
                $(this).remove(); 
            });
        }, 10000);

        $("#inv-amount").on("change paste keyup", function() {
           $('#prof-value').text(($(this).val()*0.03*30).toString().substring(0, 8));
        });

        $(document).on('click','#inv-amount ',function(){
        	// if (sb.hasClass('active')) {
        	// 	sb.removeClass('active');
        	// 	sb.addClass('passive');
        	// } else {
         // 		sb.removeClass('passive');
        	// 	sb.addClass('active');
        	// }
        });
    });

    // $('input[type=radio][name=paymentSystemId]').change(function() {
    //     if (this.value == '1') {
    //         var sel = $("#unit");
    //         $('#unit option').remove();
    //         sel.append($("<option></option>")
    //                 .attr("value", "USD").text("$"));
    //         sel.append($("<option></option>")
    //                 .attr("value", "EUR").text("€"));
    //         sel.removeAttr("disabled");
    //     }
    //     else if (this.value == '2') {
    //         $('#unit option').remove();
    //         var sel = $("#unit");
    //         sel.append($("<option></option>")
    //                 .attr("value", "BTC").text("BTC"));
    //         if (sel) {
    //             sel.attr("disabled", "disabled");
    //         }
    //     }
    // });

}(jQuery));	
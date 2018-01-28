(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(document).on('click','#social_button ',function() {
        	$('#social_register').toggleClass('social_register_hidden social_register_active');
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
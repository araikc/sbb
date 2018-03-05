(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        window.setTimeout(function() {
            $(".alert").fadeTo(500, 0).slideUp(500, function(){
                $(this).remove(); 
            });
        }, 10000);

        $("#inv-amount").on("change paste keyup", function() {
           // var ps = document.getElementsByName('paymentSystemId');
           // var sign = '$';
           // for (var i = 0, length = ps.length; i < length; i++)
           // {
           //    if (ps[i].checked && (ps[i].value == 4 || ps[i].value == 2)) 
           //    {
           //       sign = "Ƀ";
           //    }
           //    else if (ps[i].checked && (ps[i].value == 1 || ps[i].value == 3))
           //    {
           //      sign = "$";
           //    }
           // }          
           $('#prof-value1').text($(this).val()*0.03*1).toString().substring(0, 8);
           $('#prof-value2').text($(this).val()*0.03*30).toString().substring(0, 8);
           $('#prof-value3').text($(this).val()*0.03*365).toString().substring(0, 8);
        });

    });



}(jQuery));	
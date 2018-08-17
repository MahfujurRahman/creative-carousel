(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        

        $(".customers-section").owlCarousel({
            items:1,
            dots:false,
            nav:true,
            navText:["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
            loop:true,
            autoplay:false,
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));
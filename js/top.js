jQuery(document).ready(function($) { 
    $(".a-lk").click(function(event){        
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},900);
   });
});

jQuery(document).ready(function($) { 
    $(".btn-slider").click(function(event){        
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},900);
   });
});



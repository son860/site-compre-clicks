$( ".menu-before" ).click(function() {
   $( ".menu-after" ).show("swing");
});

$( ".x-close-menu" ).click(function() {
   $( ".menu-after" ).hide("swing");
});

$("a").click(function(){
    $(".menu-after").hide("swing");
});
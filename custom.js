$(document).ready(function(){
    $('#nav').click(function(){
        $('#bandeau').fadeOut("500");
        $('#nav').fadeOut("500");
        $('#return').fadeIn("500");
	$('#footer').fadeIn("500");
    });
    $('#return').click(function(){
        $('#bandeau').fadeIn("500");
        $('#nav').fadeIn("500");
	$('#return').fadeOut("500");
	$('#footer').fadeOut("500");
    });
});


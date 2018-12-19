
$('#imgMenu').click(function(){
	if($(this).hasClass('active')){
		$('.collapse').slideUp();
		$(this).removeClass('active');
	}else{
		$('.collapse').slideDown();
		$(this).addClass('active');
	}
});

$('.nav-link').click(function(){
	$('.collapse').slideUp();
	$('#imgMenu').removeClass('active');
});

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

var container = document.getElementById("collapsibleNavbar");
var navLink = container.getElementsByClassName('nav-link');

for (var i = 0; i < navLink.length; i++) {
	navLink[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
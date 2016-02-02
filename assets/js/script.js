$(document).ready(function() {
	
	// Slides
	$(".owl-carousel").owlCarousel({ 
		singleItem: true,
		autoPlay: 5000,
		navigation: true,
		navigationText: ["<img class='arrow' id='left-arrow' src='assets/img/arrow-left.png'>", "<img class='arrow' id='right-arrow' src='assets/img/arrow-right.png'>"]
	});

});
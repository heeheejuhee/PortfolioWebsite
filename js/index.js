var imageClick = function(img){
	var popup = $('.popup');

	img.click(function(){
		var src = $(this).attr('src');
		popup.fadeIn();
		popup.append('<img src='+ src +'>')
	})

	popup.click(function(){
		$(this).fadeOut();
		$(this).empty()
	})
}


$(function(){
	var portfolio = $('.portfolio').masonry({
			itemSelector: 'li',
			columnWidth:'.grid-sizer',
		});

	imageClick($('.portfolio li img'));
})
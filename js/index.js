var imageClick = function(img){
	var popup = $('.popup');

	img.click(function(){
		var src = $(this).attr('src');
		popup.fadeIn();
		var content = $('<div><img src='+ src +'></div>')
		content.append($(this).parent().find('.description').clone());
		popup.append(content)
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
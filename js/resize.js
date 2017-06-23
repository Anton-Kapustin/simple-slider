// width=document.body.clientWidth; // ширина  
// height=document.body.clientHeight; // высота 
// console.log(width);
// console.log(height);
resize_img();
$(window).ready( function() {
	$(window).resize(function() {
		resize_img();
	})
})
//Подгон под ремер экрана ==============================================================================
function resize_img() {
	var window_width = $(window).width();
	var window_height = $(window).height();
	var slider_height = window_height - 80;
	$("#slider_frame").width(window_width - 50 +'px');
	$('#slider_frame').height(slider_height + 'px');
	$('#slider').width(100+'%');
	$('#slider').height(100+'%');
	document.getElementById('slider').style.maxWidth = window_width-150+'px';

	document.getElementById('button_left').style.marginTop = (window_height-70)/2 + 'px';
	document.getElementById('button_right').style.marginTop = (window_height-70)/2 + 'px';

	console.log('window size: ' + window_height);
	console.log('ширина: '+ $('#slider_frame').height());
	console.log('высота: ' + $('#slider').height());
}

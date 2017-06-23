var category = JSON.parse(folders);
console.log(folders);
var current_folder= 'main';
console.log(current_folder);
var current_img = 0;
var delay = 5000;
var url = get_url(current_img);
var timer = set_timer(delay);

document.getElementById('slider_frame').style.background = url;
document.getElementById('slider_frame').style.backgroundSize = 'cover';

//	Установка таймера ==================================================================================
function set_timer(delay) {
	return setTimeout(slide_right, delay);
}

//Слайд влево ==========================================================================================
function slide_left() {
	clearTimeout(timer);
	var current_img = ((document.getElementById('slider_frame').style.background).replace(/\D/g,''));
	if (current_img == 0)  {
		current_img = category[current_folder].length - 1;
	}
	else {
		current_img--;
	}

	console.log(current_img);
	var url = get_url(current_img);
	document.getElementById('slider_frame').style.background = url;
	document.getElementById('slider_frame').style.backgroundSize = 'cover';
	timer = set_timer(delay);
}

//Слайд вправо ==========================================================================================
function slide_right() {
	clearTimeout(timer);
	var current_img = document.getElementById('slider_frame').style.background.replace(/\D/g,'');

	if (current_img >= category[current_folder].length -1) {
		current_img = 0;
	}
	else {
		current_img++;
	}
	console.log(current_img);

	var url = get_url(current_img);
	document.getElementById('slider_frame').style.background = url;
	document.getElementById('slider_frame').style.backgroundSize = 'cover';
	timer = set_timer(delay);
}

//	Выбор категории ====================================================================================
function select_nature() {
	clearTimeout(timer);
	current_folder = 'nature';
	current_img = 0;
	console.log(current_folder);
	url = get_url(current_img);
	document.getElementById('slider_frame').style.background = url;
	document.getElementById('slider_frame').style.backgroundSize = 'cover';
	timer = set_timer(delay);
}

//	Выбор категории ====================================================================================
function select_people() {
	clearTimeout(timer);
	current_folder = 'people';
	current_img = 0;
	console.log(current_folder);
	url = get_url(current_img);
	document.getElementById('slider_frame').style.background = url;
	document.getElementById('slider_frame').style.backgroundSize = 'cover';
	timer = set_timer(delay);
}

//Создание пути для изображения=========================================================================
function get_url(current_img) {
	var url = "url('slides/"+current_folder+"/"+current_img+".jpg') center";
	return url;
}
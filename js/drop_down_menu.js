menu_hide();
menu_show_mouseover();
menu_hide_mouseout();
menu_hide_click();


// Показать меню при наведении курсора ============================================================
function menu_show_mouseover() { 
$('#select_folder').mouseover(function() {
		$('#drop_down').show ();
});
}

// Скрыть меню, когда курсор убран ================================================================
function menu_hide_mouseout() {
$('#select_folder').mouseout(function() {
		$('#drop_down').hide ();
});
}

// Скрыть меню при клике на его элемент ===========================================================
function menu_hide_click() {
$('#drop_down').click(function() {
	$('#drop_down').hide ();
});
}

// Скрытие меню ===================================================================================
function menu_hide() {
	$('#drop_down').hide ();	
}
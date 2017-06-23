<!DOCTYPE html>
<html>
    <head>
        <title>Photos</title>
        <meta charset="UTF-8">
        <link href="css/styles.css" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


    </head>
    <body>
        <header>
            <ul class="menu">
                <li id="logo"></li>
                <li><a>Галерея</a></li>
                <li id="select_folder"><span>Категории</span>
                    <ul id="drop_down">
                        <li onclick="select_nature()"><a>Природа</a></li>
                        <li onclick="select_people()"><a>Люди</a></li>
                    </ul>
                </li>
                <li><a>Стоимость</a></li>
                <li><span>Связь</span></li>
            </ul>                   
        </header>
        <div id="slider_block">
            <div id="slider_frame">
                <div>
                    <button id="button_left" onclick="slide_left()"></button>
                </div>
                <div id="slider"></div>
                <div>
                    <button id="button_right" onclick="slide_right()"></button>
                </div>
            </div>       
        </div>
        <?php include('folders_files.php'); ?>
        <script type="text/javascript">var folders = '<?=json_encode($struct_folders);?>';</script>
        <script src="js/slider.js"></script> 
        <script type="text/javascript" src="js/drop_down_menu.js"></script> 
        <script type="text/javascript" src="js/resize.js"></script> 

    </body>

 
</html>

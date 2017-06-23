<?php 


$folders[] = '';
$struct_folders = struct_folders();
$get_folders = get_folders($struct_folders);
#Структура директорий и файлов
function struct_folders() {

    #Массив с файлами в дефолтной папке
    $default_folder = glob('/home/toxa/NetBeansProjects/igphoto/public_html/slides/*.jpg'); 

    foreach ($default_folder as $key => $folder) {
        $files_in_folders[$default_folder][] = basename($folder);
    }

    #Массив с папками
    $dirs = glob('/home/toxa/NetBeansProjects/igphoto/public_html/slides/*', GLOB_ONLYDIR); 
    foreach ($dirs as $key => $folder) {

        $folders[] = basename($folder);
    }
    // echo json_encode($folders);

    foreach ($folders as $key => $dir) {

        #Многомерный массив с папками и файлами
        $folder = glob('/home/toxa/NetBeansProjects/igphoto/public_html/slides/'.$dir.'/*.jpg'); 
        foreach ($folder as $fold => $file) {
            $files_in_folders[$dir][] = basename($file);
        }
    }       
    return $files_in_folders;
}

function get_folders($struct_folders) {
    foreach ($struct_folders as $key => $value) {
        $array[] = $key;
    }
    
    return $array;
}

?>
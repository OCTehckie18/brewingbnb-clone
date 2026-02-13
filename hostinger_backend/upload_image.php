<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if(isset($_FILES['image'])){
    $errors = array();
    $file_name = $_FILES['image']['name'];
    $file_size = $_FILES['image']['size'];
    $file_tmp = $_FILES['image']['tmp_name'];
    $file_type = $_FILES['image']['type'];
    $file_ext = strtolower(end(explode('.',$_FILES['image']['name'])));
    
    $extensions= array("jpeg","jpg","png");
    
    if(in_array($file_ext,$extensions)=== false){
        $errors[] = "extension not allowed, please choose a JPEG or PNG file.";
    }
    
    if($file_size > 2097152) { // 2MB
        $errors[] = 'File size must be excately 2 MB';
    }
    
    if(empty($errors)==true) {
        move_uploaded_file($file_tmp,"uploads/".$file_name); // Make sure 'uploads/' folder exists on server
        echo json_encode(["status" => "success", "url" => "uploads/" . $file_name]);
    }else{
        echo json_encode(["status" => "error", "errors" => $errors]);
    }
}
?>

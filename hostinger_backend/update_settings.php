<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$data = json_decode(file_get_contents("php://input"));
if (isset($data->breaking_news)) {
    $settings = [
        "breaking_news" => htmlspecialchars(strip_tags($data->breaking_news))
    ];
    
    file_put_contents('settings.json', json_encode($settings));
    
    echo json_encode(["status" => "success", "message" => "Settings updated"]);
} else {
    echo json_encode(["status" => "error", "message" => "Invalid input"]);
}
?>

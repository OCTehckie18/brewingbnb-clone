<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Cache-Control: no-cache, no-store, must-revalidate");
header("Pragma: no-cache");
header("Expires: 0");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$settingsFile = 'settings.json';

// Return default if file doesn't exist
if (!file_exists($settingsFile)) {
    echo json_encode(["breaking_news" => "Welcome to Brewing BnB!"]);
    exit;
}

$contents = file_get_contents($settingsFile);
if (!$contents) {
    echo json_encode(["breaking_news" => "Welcome to Brewing BnB!"]);
    exit;
}

echo $contents;
?>

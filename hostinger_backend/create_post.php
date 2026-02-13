<?php
include 'db_connect.php';

// Allow from any origin
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$data = json_decode(file_get_contents("php://input"));

if(isset($data->title) && isset($data->content)) {
    $title = $conn->real_escape_string($data->title);
    $content = $conn->real_escape_string($data->content);
    $category = $conn->real_escape_string($data->category);
    $image_url = $conn->real_escape_string($data->image_url);
    $read_time = $conn->real_escape_string($data->read_time);
    
    // Basic boolean checks
    $is_featured = isset($data->is_featured) && $data->is_featured ? 1 : 0;
    $is_trending = isset($data->is_trending) && $data->is_trending ? 1 : 0;

    $sql = "INSERT INTO posts (title, content, category, image_url, read_time, is_featured, is_trending) VALUES ('$title', '$content', '$category', '$image_url', '$read_time', $is_featured, $is_trending)";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success", "id" => $conn->insert_id]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error: " . $sql . "<br>" . $conn->error]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid input"]);
}

$conn->close();
?>

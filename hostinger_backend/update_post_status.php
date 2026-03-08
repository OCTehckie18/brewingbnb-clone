<?php
include 'db_connect.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$data = json_decode(file_get_contents("php://input"));

if (isset($data->id)) {
    $id = (int)$data->id;
    
    // Build update query dynamically
    $updates = [];
    if (isset($data->is_featured)) {
        $is_featured = $data->is_featured ? 1 : 0;
        $updates[] = "is_featured = $is_featured";
    }
    if (isset($data->is_trending)) {
        $is_trending = $data->is_trending ? 1 : 0;
        $updates[] = "is_trending = $is_trending";
    }
    
    if (count($updates) > 0) {
        $sql = "UPDATE posts SET " . implode(", ", $updates) . " WHERE id = $id";
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["status" => "success"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error updating post: " . $conn->error]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "No fields to update"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "ID is required"]);
}

$conn->close();
?>

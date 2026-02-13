<?php
include 'db_connect.php';

// Allow from any origin - in prod restrict this!
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$data = json_decode(file_get_contents("php://input"));

if(isset($data->id)) {
    $id = intval($data->id);
    
    // Ideally, check for session/auth here, but for this simple setup we trust the frontend knows the admin (dangerous in real prod)
    // A better way is to pass a secret token or check PHP session if using cookies.
    // For now, let's assume if you can hit this API with an ID, you are trying to delete it.
    
    $sql = "DELETE FROM posts WHERE id = $id";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error deleting record: " . $conn->error]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid ID"]);
}

$conn->close();
?>

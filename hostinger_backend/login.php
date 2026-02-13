<?php
include 'db_connect.php';

// Get JSON input
$data = json_decode(file_get_contents("php://input"));

if(isset($data->username) && isset($data->password)) {
    // Simple hardcoded check for now - or use a 'users' table in DB
    // You should change this to check against a 'users' table with password_verify()
    // For MVP, we check against a hardcoded admin pass or DB query
    
    $username = $conn->real_escape_string($data->username);
    
    // Example: Check against users table (Better Practice)
    $sql = "SELECT * FROM users WHERE username = '$username'";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($data->password, $user['password'])) {
            echo json_encode(["status" => "success", "user" => $user['username']]);
        } else {
            echo json_encode(["status" => "error", "message" => "Invalid password"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "User not found"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Missing credentials"]);
}

$conn->close();
?>

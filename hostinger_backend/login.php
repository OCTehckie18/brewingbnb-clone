<?php
include 'db_connect.php';

// Get JSON input
$data = json_decode(file_get_contents("php://input"));

if(isset($data->username) && isset($data->password)) {
    $username = $conn->real_escape_string($data->username);
    
    $sql = "SELECT * FROM users WHERE username = '$username'";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        
        // Uncomment to debug:
        // error_log("Login attempt: " . $username . " | Input: " . $data->password . " | Stored: " . $user['password']);

        if (password_verify($data->password, $user['password'])) {
            echo json_encode(["status" => "success", "user" => $user['username']]);
        } else {
            // Check if plain text matches (for migration/debug)
            if ($data->password === $user['password']) {
                 // Auto-fix: hashed password was stored as plain text
                 $newHash = password_hash($data->password, PASSWORD_DEFAULT);
                 $conn->query("UPDATE users SET password = '$newHash' WHERE id = " . $user['id']);
                 echo json_encode(["status" => "success", "user" => $user['username'], "fixed" => true]);
            } else {
                echo json_encode(["status" => "error", "message" => "Invalid password"]);
            }
        }
    } else {
        echo json_encode(["status" => "error", "message" => "User not found"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Missing credentials"]);
}

$conn->close();
?>

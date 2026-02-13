<?php
include 'db_connect.php';

if(isset($_GET['pass'])) {
    $pass = $_GET['pass'];
    $hashed_password = password_hash($pass, PASSWORD_DEFAULT);
    
    $username = 'admin';
    // Update the password for 'admin' user
    $stmt = $conn->prepare("UPDATE users SET password = ? WHERE username = ?");
    $stmt->bind_param("ss", $hashed_password, $username);
    
    if ($stmt->execute()) {
        echo "Password for '$username' updated successfully.<br>";
        echo "New Hash: " . $hashed_password;
    } else {
        echo "Error updating record: " . $conn->error;
    }
    
    $stmt->close();
} else {
    echo "Usage: reset_password.php?pass=NEW_PASSWORD";
}

$conn->close();
?>

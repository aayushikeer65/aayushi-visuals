<?php
/* =========================================================
   Aayushi Visuals — Contact Form Handler (PHP)
   Ye file server (PHP hosting) par contact form ka email bhejti hai.
   ========================================================= */

// Jahan email aana chahiye:
$to = "aayushikeer65@gmail.com";

// Sirf POST request accept karo
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: index.html");
    exit;
}

// Form fields le lo aur clean karo
$name    = trim(htmlspecialchars($_POST["name"]    ?? ""));
$email   = trim(htmlspecialchars($_POST["email"]   ?? ""));
$subject = trim(htmlspecialchars($_POST["subject"] ?? "New inquiry"));
$message = trim(htmlspecialchars($_POST["message"] ?? ""));

// Basic validation
if ($name === "" || $email === "" || $message === "" || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, "Please fill all fields with a valid email.");
}

// Email banao
$mailSubject = "Portfolio Inquiry: " . $subject;
$body  = "You have a new message from your portfolio website:\n\n";
$body .= "Name:    $name\n";
$body .= "Email:   $email\n";
$body .= "Subject: $subject\n\n";
$body .= "Message:\n$message\n";

$headers  = "From: Aayushi Visuals <no-reply@" . ($_SERVER['SERVER_NAME'] ?? 'localhost') . ">\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Email bhejo
$sent = @mail($to, $mailSubject, $body, $headers);

if ($sent) {
    respond(true, "Thank you! Your message has been sent. I'll get back to you soon. ☕");
} else {
    respond(false, "Sorry, something went wrong. Please email me directly at $to");
}

/* Helper: JSON ya HTML dono handle kare */
function respond($ok, $msg) {
    // Agar AJAX request hai to JSON, warna simple HTML page
    if (!empty($_SERVER['HTTP_X_REQUESTED_WITH'])) {
        header("Content-Type: application/json");
        echo json_encode(["ok" => $ok, "message" => $msg]);
    } else {
        $color = $ok ? "#6FB6AE" : "#e08";
        echo "<!doctype html><html><head><meta charset='utf-8'>
        <meta name='viewport' content='width=device-width,initial-scale=1'>
        <title>Aayushi Visuals</title>
        <style>body{background:#0E0B14;color:#F4EFE9;font-family:sans-serif;display:flex;
        min-height:100vh;align-items:center;justify-content:center;text-align:center;padding:24px}
        a{color:$color;text-decoration:none;border:1px solid $color;padding:10px 22px;
        border-radius:999px;display:inline-block;margin-top:20px}</style></head>
        <body><div><h2 style='color:$color'>" . ($ok ? "Message Sent ✓" : "Oops!") . "</h2>
        <p>$msg</p><a href='index.html#contact'>← Back to website</a></div></body></html>";
    }
    exit;
}
?>

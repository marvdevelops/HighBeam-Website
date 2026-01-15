<?php
/**
 * HighBeam Contact Form Handler
 * Sends contact form submissions via SMTP2GO API
 * 
 * IMPORTANT: Replace 'YOUR_SMTP2GO_API_KEY' with your actual SMTP2GO API key
 */

// Configuration
$SMTP2GO_API_KEY = 'YOUR_SMTP2GO_API_KEY'; // Replace with your SMTP2GO API key
$TO_EMAIL = 'info@highbeam.digital';
$FROM_EMAIL = 'noreply@highbeam.digital';
$FROM_NAME = 'HighBeam Website';

// Enable error reporting for debugging (disable in production)
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

// Set headers for JSON response
header('Content-Type: application/json');

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get form data
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$company = isset($_POST['company']) ? trim($_POST['company']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$description = isset($_POST['description']) ? trim($_POST['description']) : '';

// Validate required fields
$errors = [];

if (empty($name)) {
    $errors[] = 'Name is required';
}

if (empty($company)) {
    $errors[] = 'Company is required';
}

if (empty($email)) {
    $errors[] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email address';
}

if (empty($description)) {
    $errors[] = 'Project description is required';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
    exit;
}

// Prepare email content
$subject = "New Project Inquiry from {$name} ({$company})";

$htmlBody = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #FFD300; padding: 20px; text-align: center; }
        .header h1 { color: #000; margin: 0; font-size: 24px; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; }
        .value { margin-top: 5px; font-size: 16px; }
        .description { background-color: #fff; padding: 15px; border-left: 4px solid #FFD300; margin-top: 20px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>New Project Inquiry</h1>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Name</div>
                <div class='value'>" . htmlspecialchars($name) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Company</div>
                <div class='value'>" . htmlspecialchars($company) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Email</div>
                <div class='value'><a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></div>
            </div>
            " . ($phone ? "<div class='field'>
                <div class='label'>Phone</div>
                <div class='value'>" . htmlspecialchars($phone) . "</div>
            </div>" : "") . "
            <div class='description'>
                <div class='label'>Project Description</div>
                <div class='value'>" . nl2br(htmlspecialchars($description)) . "</div>
            </div>
        </div>
    </div>
</body>
</html>
";

$textBody = "New Project Inquiry from HighBeam Website\n\n";
$textBody .= "Name: {$name}\n";
$textBody .= "Company: {$company}\n";
$textBody .= "Email: {$email}\n";
if ($phone) {
    $textBody .= "Phone: {$phone}\n";
}
$textBody .= "\nProject Description:\n{$description}\n";

// Prepare SMTP2GO API request
$apiUrl = 'https://api.smtp2go.com/v3/email/send';

$payload = [
    'api_key' => $SMTP2GO_API_KEY,
    'to' => [$TO_EMAIL],
    'sender' => "{$FROM_NAME} <{$FROM_EMAIL}>",
    'subject' => $subject,
    'html_body' => $htmlBody,
    'text_body' => $textBody,
    'custom_headers' => [
        ['header' => 'Reply-To', 'value' => $email]
    ]
];

// Send request to SMTP2GO
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $apiUrl);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Accept: application/json'
]);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

// Handle curl errors
if ($curlError) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email. Please try again later.']);
    exit;
}

// Parse SMTP2GO response
$result = json_decode($response, true);

if ($httpCode === 200 && isset($result['data']['succeeded']) && $result['data']['succeeded'] > 0) {
    // Success - redirect back to contact page with success message
    // For AJAX requests, return JSON
    if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {
        echo json_encode(['success' => true, 'message' => 'Thank you! Your message has been sent.']);
    } else {
        // For regular form submissions, redirect
        header('Location: ../contact.html?success=1');
    }
    exit;
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email. Please try again or contact us directly at info@highbeam.digital']);
    exit;
}
?>

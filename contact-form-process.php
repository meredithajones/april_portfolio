
<!-- Setting up PHP to send emails -->
<?php
if (isset($_POST['submit'])) {

    $name = $_POST[ 'name'];
    $email = $_POST[ 'email'];
    $subject = $_POST[ 'subject'];
    $Message = $_POST[ 'Message'];

    $mailTo = "meredith@thegreeksnextdoor.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have an email from " .$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsent");

}

    // $email_to = "meredithjonesp@gmail.com";
    // $email_subject = "Portfolio Site Submission";



    // Error Message
//     function problem($error)
//     {
//         echo "Sorry, but there was an error with the form you submitted. Please reach out directly to meredithjonesp@gmail.com ";
//         echo "These errors appear below.<br><br>";
//         echo $error . "<br><br>";
//         echo "Please go back and fix these errors.<br><br>";
//         die();
//     }

//     // validation expected data exists
//     if (
//         !isset($_POST['name']) ||
//         !isset($_POST['email']) ||
//         !isset($_POST['Message'])
//     ) {
//         problem('We are sorry, but there appears to be a problem with the form you submitted.');
//     }

//     $name = $_POST['name']; // required
//     $email = $_POST['email']; // required
//     $message = $_POST['Message']; // required

//     $error_message = "";
//     $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

//     if (!preg_match($email_exp, $email)) {
//         $error_message .= 'The Email address you entered does not appear to be valid.<br>';
//     }

//     $string_exp = "/^[A-Za-z .'-]+$/";

//     if (!preg_match($string_exp, $name)) {
//         $error_message .= 'The Name you entered does not appear to be valid.<br>';
//     }

//     if (strlen($message) < 2) {
//         $error_message .= 'The Message you entered do not appear to be valid.<br>';
//     }

//     if (strlen($error_message) > 0) {
//         problem($error_message);
//     }

//     $email_message = "Form details below.\n\n";

//     function clean_string($string)
//     {
//         $bad = array("content-type", "bcc:", "to:", "cc:", "href");
//         return str_replace($bad, "", $string);
//     }

//     $email_message .= "name: " . clean_string($name) . "\n";
//     $email_message .= "email: " . clean_string($email) . "\n";
//     $email_message .= "Message: " . clean_string($message) . "\n";

//     // create email headers
//     $headers = 'From: ' . $email . "\r\n" .
//         'Reply-To: ' . $email . "\r\n" .
//         'X-Mailer: PHP/' . phpversion();
//     @mail($email_to, $email_subject, $email_message, $headers);
// ?>

//     <!-- Email success message -->

//     Thanks for your email! I look forward to being in touch soon!

// <?php
// }
// ?>
<?php

use PHPMailer\PHPMailer\PHPMailer;

if(isset($_POST['submit'])){
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $mailTo ="fzsharad@gmail.com";
    $headers = "From: ".$email;
    $txt ="You have recieved an email from ".$firstName." ".$lastName.".\n\n".$message; 
    
    require_once "PHPMailer/PHPMailer.php";
      require_once "PHPMailer/SMTP.php";
      require_once "PHPMailer/Exception.php";
    
    $mail = new PHPMailer();
    
    $mail-> isSMTP(); 
    $mail->Host = smtp.gmail.com;
     $mail->SMTPAuth = true;
     $mail->Username ="fzsharad@gmail.com";
     $mail->Password = "fzsharad";
     $mail->Port = 465;
     $mail->SMTPSecure = "ssl";
    
    $mail-> isHTML(true);
    $mail-> setFrom($email,$firstName);
    $mail-> addAddress("fzsharad@gmail.com");
    $mail-> Subject = ("$email ($subject)");
    $mail-> Body = $txt;
    
    if($mail->send()){
        $status = "success";
        $response = "Emailin sent!";
    }else{
        $status = "failed";
        $response ="Something is wrong: <br>".$mail->ErrorInfo;
    }
    
    exit(json_encode(array("status" => $status, "response" => $response)));
    }
    }
    
    mail( $mailTo, $subject, $txt,  $headers);
    header("Location: index.html?mailsend");
}
?>

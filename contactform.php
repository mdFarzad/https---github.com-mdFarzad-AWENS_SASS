<?php

use PHPMailer\PHPMailer\PHPMailer;

if(isset($_POST['firstName']) && ($_POST['email'])){
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
     $mail->Username ="mfarad152048@bscse.uiu.ac.bd";
     $mail->Password = "TomatoSquad1940";
     $mail->Port = 465;
     $mail->SMTPSecure = "ssl";
    
    $mail-> isHTML(true);
    $mail-> setFrom($email,$firstName);
    $mail-> addAddress("mfarad152048@bscse.uiu.ac.bd");
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
    
   
?>

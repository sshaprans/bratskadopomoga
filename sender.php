<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $text = $_POST['text'];

	$to = "sshaprans@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка на сайті";

	
	$msg="
    Имя: $name /n
    Телефон: $phone /n
    Текст: $text";
	mail($to, $subject, $msg, "From: $to ");

?>

<?php
if($_POST)
    {
    $to = "tsykalo.aleksandr@gmail.com"; //куда отправлять письмо
    $subject = "Заказ звонка"; //тема
    $message = '<span style="font-weight:bold;color:#ff6600;font-size:18px;"><i>Заказ звонка</i> </span><br><br>
    Имя: <span style="font-weight:bold;color:#339900;">'.$_POST['name'].'</span><br>
    Телефон: <span style="font-weight:bold;color:#339900;"> '.$_POST['telephone'].'</span>';
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: <info@aliran.com.ua>\r\n"; // от кого, придумайте ящик или укажите почту своего сайта.
    $result = mail($to, $subject, $message, $headers);
  
    if ($result){
        echo "<p>Сообщение успешно отправлено. Скоро Вам перезвонят</p>";
    }
    }
?>
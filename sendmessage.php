<?php
    $content = '';
    foreach ($_POST as $key => $value){
        if($value){
            $content .= "<b>$key</b>: <i>$value</i> \n";

        }
    }
    if(trim($content)){
        $content = "<b> Message Form Site:</b>\n".$content;
        $apiToken = "6983851386:AAEoTLHFsLY3n2D8328BloIgvBiwXzo1lsI";
        $data = [
            'chat_id' => '@ResponceFromMyPortfolio',
            'text' => $content,
            'parse_mode' => 'HTML'
        ];
        $response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?".html_build_qurey($data));
    }
?>
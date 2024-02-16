var telegram_bot_id = "6983851386:AAEoTLHFsLY3n2D8328BloIgvBiwXzo1lsI";

var chat_id = 2061106716;
var u_name, phone, email, subject, YourMssg, message;
var ready = function () {
    u_name = document.getElementById("contact-name").value;
    phone = document.getElementById("contact-phone").value;
    email = document.getElementById("contact-email").value;
    subject = document.getElementById("subject").value;
    YourMssg = document.getElementById("contact-message").value;
    message = "Name: " + u_name + "\nPhone: " + phone + "\nEmail: " + email + "\nSubject: " + subject+ "\nCustomer Message: "+ YourMssg ;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("contact-name").value = "";
    document.getElementById("contact-phone").value = "";
    document.getElementById("contact-email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("contact-message").value = "";
    alert("Contact Form Successfuly send !")
    return false;
};




// const botToken = '6983851386:AAEoTLHFsLY3n2D8328BloIgvBiwXzo1lsI';
// const chatId = '2061106716';
// const message = '720660573';

// const url = https://api.telegram.org/bot6983851386:AAEoTLHFsLY3n2D8328BloIgvBiwXzo1lsI/sendMessage;

// // Create a new XMLHttpRequest object
// const xhr = new XMLHttpRequest();
// xhr.open('POST', url, true);
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.onload = function () {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     console.log('Message sent successfully:', JSON.parse(xhr.responseText));
//   } else {
//     console.error('Error sending message:', xhr.statusText);
//   }
// };
// xhr.onerror = function () {
//   console.error('Error sending message:', xhr.statusText);
// };
// xhr.send(JSON.stringify({
//   chat_id: chatId,
//   text: message
// }));

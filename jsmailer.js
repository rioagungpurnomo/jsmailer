var jsmailer = {
  emailjs: function(array) {
    if (array && array.service_id && array.template_id && array.to && array.name && array.subject && array.message && array.public_key) {
      emailjs.send(array.service_id, array.template_id, {
        "to_email": array.to,
        "from_name": array.name,
        "subject": array.subject,
        "message": array.message
      }, array.public_key)
      .then(function(response) {
        display = (typeof array.display !== "undefined") ? array.display : true;
        if (display == true){
        log = {
          "jsmailer":{
          "success": true,
          "message": "Email message sent successfully."
          }};
          console.log(log);
        }else{
          return true;
        }
      }, function(error) {
        display = (typeof array.display !== "undefined") ? array.display : true;
        if (display == true){
        log = {
          "jsmailer":{
          "success": false,
          "message": "Email message failed to send."
        }};
        console.log(log);
      }else{
        return false;
      }
    });
  } else {
    display = (typeof array.display !== "undefined") ? true : false;
    if (display == true){
    log = {
          "jsmailer":{
          "success": false,
          "message": "Email message failed to send."
        }};
        console.log(log);
      }else{
        return false;
      }
  }
},
  smtpjs: function(array) {
    if (array && array.email && array.password && array.to && array.subject && array.message){
      Email.send({
        Host : "smtp.elasticemail.com",
        Port : 2525,
        Secure : true,
        Username : array.email,
        Password : array.password,
        To : array.to,
        From : array.email,
        Subject : array.subject,
        Body : array.message
      }).then(function(response) {
        display = (typeof array.display !== "undefined") ? array.display : true;
        if (display == true){
        log = {
          "jsmailer":{
          "success": true,
          "message": "Email message sent successfully."
          }};
          console.log(log);
        }else{
          return true;
        }
      }, function(error) {
        display = (typeof array.display !== "undefined") ? array.display : true;
        if (display == true){
        log = {
          "jsmailer":{
          "success": false,
          "message": "Email message failed to send."
        }};
        console.log(log);
      }else{
        return false;
      }
    });
    } else {
      display = (typeof array.display !== "undefined") ? true : false;
      if (display == true){
        log = {
          "jsmailer":{
          "success": false,
          "message": "Email message failed to send."
          }};
          console.log(log);
      }else{
        return false;
      }
    }
  }
};
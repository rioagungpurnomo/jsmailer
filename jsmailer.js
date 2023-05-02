var jsmailer = {
  key: function(){
    var string = "qwertyuiopasdfghjklzxcvbnm09876543251/)(+-&:;!?'_$*#@%=|^";
    var salt = "jsmailer";
    
    let keyString = "";
    for (let i = 0; i < 1; i++) {
      keyString += string;
    }
    keyString += string.split("").reverse().join("");
    for (let i = 0; i < 1; i++) {
      keyString += string;
    }
    keyString += string.split("").reverse().join("");
    for (let i = 0; i < 1; i++) {
      keyString += string;
    }
    
    const keySize = 256 / 32;
        const iterations = 10000;
        const key = CryptoJS.PBKDF2(keyString, salt, {
          keySize: keySize,
          iterations: iterations,
        });
        
        return key;
  },
  encrypt: function(plaintext){
    const iv = 263429942052226;
    const ciphertext = CryptoJS.AES.encrypt(plaintext, jsmailer.key(), { iv: iv });
    return ciphertext.toString();
  },
  decrypt: function(ciphertext){
    const iv = 263429942052226;
    const bytes = CryptoJS.AES.decrypt(ciphertext, jsmailer.key(), { iv: iv });
    const plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return plaintext;
  },
  emailjs: function(array) {
    if (array && array.service_id && array.template_id && array.to && array.name && array.subject && array.message && array.public_key) {
      emailjs.send(jsmailer.decrypt(array.service_id), jsmailer.decrypt(array.template_id), {
        "to_email": jsmailer.decrypt(array.to),
        "from_name": jsmailer.decrypt(array.name),
        "subject": jsmailer.decrypt(array.subject),
        "message": jsmailer.decrypt(array.message)
      }, jsmailer.decrypt(array.public_key))
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
        Username : jsmailer.decrypt(array.email),
        Password : jsmailer.decrypt(array.password),
        To : jsmailer.decrypt(array.to),
        From : jsmailer.decrypt(array.email),
        Subject : jsmailer.decrypt(array.subject),
        Body : jsmailer.decrypt(array.message)
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
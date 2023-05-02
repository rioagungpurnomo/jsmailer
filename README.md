# JsMailer
The classic email sending library for JavaScript.

## Documentation
### EmailJS
1. First of all, go to EmailJS website (https://www.emailjs.com) and create your account.
2. After registering, you will be directed to the EmailJS dashboard. Select `Add New Service` to create a new service.
3. Select the appropriate email service that you use, then for the service name you can change it or leave it as the default, there is a `Service ID` and you copy it and then you click `Connect Account` then you will be directed to the email account login page to associate which email you want to use to send messages.
4. Now, you need to add an email template. Click on the `Email Templates` tab and then click on `Create new template`.
5. Fill in the details as shown below. When finished, you go to the `setting` page at the top of the form then you will see `Template ID` and copy it, Then click "Save" to save your template.
![EmailJS](https://user-images.githubusercontent.com/91432414/235501001-ba83e5bd-c544-446d-8e03-b94d1c1d6a89.jpg)
6. Now go to the `Account` page and there is a `Public Key`, don't forget to copy it.
7. After that, to send an email message, fill it below according to what we got above.

```javascript
<script src="https://smtpjs.com/v3/smtp.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script src="https://jsmailer.pages.dev/jsmailer.js"></script>
<script>
jsmailer.emailjs({
  "public_key":"You Public Key",
  "service_id": "You Service ID",
  "template_id": "You Template ID",
  "name": "Email Account Name",
  "to": "Destination Email",
  "subject": "Hello Javascript",
  "message": "<h1>Messages sent with Javascript</h1>",
  "display": true
});
</script>
```
If you don't want to receive display output, all you have to do is change `display` to `false`.
```javascript
"display": false
```

Documentation: [**EmailJS**](https://www.emailjs.com/docs)

### SmtpJS
1. First of all, go to Elastice Mail website (https://elasticemail.com) and create your account.
2. After registering, you will be directed to the Elastice Mail dashboard. Select `Connect to SMTP API` and click `Create`
3. In the input `Username` filled with the email address you registered earlierIn the input `Username` filled with the email address you registered earlier,Then click `Create`.
4. When finished, the SMTP details that have been created will appear, then you just copy the `Password`.
5. After that, to send an email message, fill it below according to what we got above.

```javascript
<script src="https://smtpjs.com/v3/smtp.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script src="https://jsmailer.pages.dev/jsmailer.js"></script>
<script>
jsmailer.smtpjs({
  "email": "You Email",
  "password": "You Password",
  "to": "Destination Email",
  "subject": "Hello Javascript",
  "message": "<h1>Messages sent with Javascript</h1>",
  "display": true
});
</script>
```
If you don't want to receive display output, all you have to do is change `display` to `false`.
```javascript
"display": false
```
Documentation:
- [**SmtpJS**](https://www.smtpjs.com)
- [**Elastice Mail**](https://elasticemail.com)

## Security
### Encrypt
```javascript
jsmailer.encrypt(plaintext)
```
### Decrypt
```javascript
jsmailer.decrypt(ciphertext)
```

## Donate
<a href="https://trakteer.id/rioagungpurnomo" target="_blank"><img id="wse-buttons-preview" src="https://cdn.trakteer.id/images/embed/trbtn-red-6.png" height="40" style="border:0px;height:40px;" alt="Trakteer Saya"></a>

Paypal : **[Support me](https://www.paypal.me/RioDev)**

## Contact me
Contact me via email: rioagungpurnomo.ak@gmail.com, I'm waiting for your input or suggestions.
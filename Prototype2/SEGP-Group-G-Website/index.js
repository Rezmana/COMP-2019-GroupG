import sgMail from '@sendgrid/mail';

const ApiKey = "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"
sgMail.setApiKey(ApiKey)

const msg = {
  to: 'ironcolin12@gmail.com', // Change to your recipient
  from: 'rezmanaagung.wibawa@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail
  .send(msg)
  .then((response) => {
    console.log(response[0].statusCode)
    console.log(response[0].headers)
  })
  .catch((error) => {
    console.error(error)
  })

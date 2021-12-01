const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
//sendgrid mcbertold@gmail.com 1a9n7d5r87alessandro
// sgMail.send({
//     to: 'zack@tiscali.it',
//     from: 'zack@tiscali.it',
//     subject: 'Proof email sending',
//     text: 'I hope this message arrive to Andrea'
// })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'zack@tiscali.it',
        subject: 'Welcome email' ,
        text: `Welcome to the app, ${name}. Let me know about`
    })
}

const sendUnsubscribeEmail = (email, name) => {
    sgMail.send({
        to:email,
        from:'zack@tiscali.it',
        subject:`Why? I miss you ${name}`,
        text: `Hi ${name} why do you left us?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendUnsubscribeEmail
}
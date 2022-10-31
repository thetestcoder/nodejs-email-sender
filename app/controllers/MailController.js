const Mailer = require('../services/Mailer')
const nodeMailer = require("nodemailer");

class MailController {
    sendMail(req, res){
        try {
            const mailOptions = {
                from:process.env.EMAIL_FROM,
                to:req.body.email,
                subject:`Hello ${req.body.name}`,
                text:req.body.message
            }
            Mailer.send(mailOptions).then(info=>{
                console.log("Message sent: %s", info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info));
            })


            res.redirect('/?success=true&message=Email Sent Successfully')
        }catch (e) {
            res.redirect(`/?success=false&message=${e.message}`)
        }
    }
}


module.exports = new MailController
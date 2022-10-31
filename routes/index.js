const MailController = require('../app/controllers/MailController')

module.exports = (app) =>{
    app.post('/send-mail', MailController.sendMail)
}
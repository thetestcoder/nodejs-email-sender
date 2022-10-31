const nodeMailer = require("nodemailer");

class Mailer{

    constructor() {
        this.setupTestAccount().then((account) => {
            this.mailer = nodeMailer.createTransport({
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth:{
                    user:account.user,
                    pass:account.pass
                }
            });
        })


    }

    async setupTestAccount(){
       return await nodeMailer.createTestAccount()
    }

    async send(options){
        return await this.getTransport().sendMail(options)
    }

    getTransport(){
        return this.mailer
    }
}

module.exports = new Mailer;
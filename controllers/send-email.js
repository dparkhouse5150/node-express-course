const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')

const sendEmailthereal = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount()

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'username@ethereal.email',
            pass: 'random-string'
        }
    })

    let info = await transporter.sendMail({
        from: 'me <my email>',
        to: 'person email',
        subject: 'basic subject'
        html: 'string or component'
    })

    res.json(info)
}

const sendEmail = async (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
        to: 'client mail',
        from: 'my gmail account',
        subject: 'basic subject',
        text: 'and easy to do anywhere, even with node.js',
        html: 'blah blah blah'
    }

    const info = await sgMail.send(msg)
    res.json(info)
}

module.exports = sendEmail;
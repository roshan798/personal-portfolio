import emailjs from '@emailjs/browser'
import config from '../configs/index.js'
const sendEmail = async (formData) => {
    return emailjs
        .sendForm(config.emailjsSeviceId, config.emailjsTemplateId, formData, {
            publicKey: config.emailjsPublicKey,
        })
        .then(
            (response) => {
                return {
                    success: true,
                    message: 'Email sent successfully',
                    response: response,
                }
            },
            (error) => {
                console.error('EMAIL SENT FAILED...', error.text)
                return {
                    success: false,
                    message: 'Failed to send Email',
                }
            }
        )
}

export default sendEmail

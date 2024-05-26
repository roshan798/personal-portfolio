import emailjs from '@emailjs/browser'

const sendEmail = async (formData) => {
    return emailjs
        .sendForm(
            import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
            formData,
            {
                publicKey: import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY,
            }
        )
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

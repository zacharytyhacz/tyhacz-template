import Mailgun from 'mailgun.js'
import formData from 'form-data'
import config from '../config'

const {
    MAILGUN_API_KEY,
    MAILGUN_FROM_DOMAIN,
    MAILGUN_FROM_EMAIL
} = config()

const mailgun = new Mailgun(formData)
const client = mailgun.client({
    username: 'api',
    key: MAILGUN_API_KEY
})

const emailBodyWrapper = (message: string): string => {
    return (
`
<div style="font-family: sans-serif;text-align: center">
  <img
    src="https://app.lcmlowry.com/logo"
    alt="Lowry Construction and Mechanical"
    width="100"
  />
  <h1 style="color:#10086d">Lowry Construction and Mechanical</h1>
  <h4 style="color:#10086d">An important message from our team:</h4>
  <br>
  <p>
  ${message}
  </p>
  <br>
  <h3 style="color:#10086d">Contact Us</h3>
  <h4>910.522.1234</h4>
  <h4><a href="mailto:qlowry@lcmlowry.com">qlowry@lcmlowry.com</a></h4>
  <h6>Do not reply to this email. This email is not attended to be replied back to.</h6>
  <h6><a href="https://www.lcmlowry.com/">Lowry Construction and Mechanical</a></h6>
</div>
`
    )
}

export const sendEmail = async (to: string, subject: string, body: string) => {
    const messageData = {
        from: MAILGUN_FROM_EMAIL,
        to,
        subject,
        html: emailBodyWrapper(body)
    };

    try {
        await client.messages.create(MAILGUN_FROM_DOMAIN, messageData)
    } catch (error) {
        console.error('Error in sending email:', error);
    }
}

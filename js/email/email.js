import { htmlTemplate } from './emailtemplate';
import { emailData } from './../constants';

function sendEmail({ receiver, sender, subject, receiverFName, senderFName, description, authToken, emailAPiService, imageLink, serveTime, arriveTime, location }) {
  fetch(emailAPiService, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations:
      [{ to: [{ email: receiver }] }],
      from: { email: sender },
      subject,
      content: [{
        type: 'text/html',
        value: htmlTemplate(receiverFName, senderFName, description, imageLink, serveTime, arriveTime, location),
      }],
    }),
  })
    .catch(error => console.warn('fetch error:', error));
}

export default function sendEmails(emails, potluck) {
  emails.forEach((email) => {
    const data = {
      authToken: emailData.authToken,
      subject: emailData.subject,
      receiverFName: email,
      sender: 'Potluck@email.email',
      receiver: email,
      title: potluck.title,
      theme: potluck.theme,
      description: potluck.description,
      eventDate: potluck.eventDate,
      arriveTime: potluck.arriveTime,
      serveTime: potluck.serveTime,
      location: potluck.location,
      imageLink: potluck.link,
      emailAPiService: 'https://api.sendgrid.com/v3/mail/send'
    };
    sendEmail(data);
  }, this);
}

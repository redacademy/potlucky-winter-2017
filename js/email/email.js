import { htmlTemplate } from './emailtemplate';

export default function sendEmail(data) {
  const { receiver, sender, subject, receiverFName, senderFName, description, authToken, emailAPiService, imageLink } = data;
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
        value: htmlTemplate(receiverFName, senderFName, description, imageLink),
      }],
    }),
  }).then(response => console.log(response))
    .catch(error => console.warn('fetch error:', error));
}

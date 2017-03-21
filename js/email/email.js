import { htmlTemplate } from './emailtemplate';

export function sendEmail(data) {
  const { receiver, sender, subject, receiverFName, senderFName, description, authToken, url } = data;
  fetch(url, {
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
        value: htmlTemplate(receiverFName, senderFName, description),
      }],
    }),
  }).then(response => console.log(response))
    .catch(error => console.warn('fetch error:', error));
}

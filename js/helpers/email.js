import { htmlTemplate } from './emailtemplate';

export function constructEmailData(receiver, sender, subject, receiverFName, senderFName, description) {
  return ({
    receiver, sender, subject, receiverFName, senderFName, description
  });
}
export function sendEmail(data, url, authToken) {
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations:
      [{ to: [{ email: data.receiver }] }],
      from: { email: data.sender },
      subject: data.subject,
      content: [{
        type: 'text/html',
        value: htmlTemplate(data.receiverFName, data.senderFName, data.description),
      }],
    }),
  }).then(response => console.log(response))
    .catch(error => console.warn('fetch error:', error));
}

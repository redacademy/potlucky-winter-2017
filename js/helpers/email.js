import { htmlTemplate } from './emailtemplate';

export function constructEmailData(receiver, sender, subject, receiverFName, senderFName, description) {
  return ({
    receiver, sender, subject, receiverFName, senderFName, description
  });
}
export function sendEmail(data, url) {
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer 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',
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

import { htmlTemplate } from './emailtemplate';

export const contentValueString = (data, fname, lname) => {
  return `Hello ${fname}${lname} how are you? i hope you are doing well. I am doing fine thank you from ${data.sender}`
};

export function sendEmail(data) {
  fetch('https://api.sendgrid.com/v3/mail/send', {
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

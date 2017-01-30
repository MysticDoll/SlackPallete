export default (token) =>
  fetch(`https://slack.com/api/emoji.list?token=${token}`)
    .then(r => r.json())
    .then(r => r.emoji);

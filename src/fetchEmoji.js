export default (token) =>
  window.fetch ? fetch(`https://slack.com/api/emoji.list?token=${token}`)
    .then(r => r.json())
    .then(r => r.emoji) : new Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", `https://slack.com/api/emoji.list?token=${token}`);
      xhr.send();
      xhr.addEventListener("load", function() {
        resolve(JSON.parse(xhr.responseText).emoji);
      });
      xhr.addEventListener("error", function() {
        reject(xhr.statusText);
      });
    });

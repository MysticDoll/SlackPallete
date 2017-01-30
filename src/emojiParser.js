export default (emojiList) => {
  let list = {};
  Object.keys(emojiList).forEach(key => {
    let url = emojiList[key];

    if(!/alias:(.+$)/.test(url)) {
      list[key] = url;
    }
  });

  return list;
};

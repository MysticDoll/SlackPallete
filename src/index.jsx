import React from "react";
import {render} from "react-dom";
import App from "./App.jsx";
import fetchEmoji from "./fetchEmoji";
import emojiParser from "./emojiParser";

const container = document.getElementById("app-container");
const fetcher = document.getElementById("emoji-fetcher");
const token = document.getElementById("slack-token");
const row = document.getElementById("row-count");
const column = document.getElementById("column-count");

fetcher.addEventListener("click", () => {
  fetchEmoji(token.value)
    .then(emojiParser)
    .then((emojiList) => {
      let list = Object.assign(
          {
            "__blank__": "./blank.png"
          },
          emojiList
      );
      let canvas = Array(parseInt(row.value)).fill()
                    .map(() =>
                      Array(parseInt(column.value)).fill()
                        .map(() => "__blank__")
                    );
      render(
        <App emojiList={list} canvas={canvas}></App>,
        container
      );
    });
});

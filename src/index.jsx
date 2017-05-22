import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import App from "./App.jsx";
import fetchEmoji from "./fetchEmoji";
import emojiParser from "./emojiParser";

const container = document.getElementById("app-container");
const fetcher = document.getElementById("emoji-fetcher");
const token = document.getElementById("slack-token");
const row = document.getElementById("row-count");
const column = document.getElementById("column-count");
const blankSymbol = document.getElementById("blank-symbol");

fetcher.addEventListener("click", () => {
  let defaultList = {};
  defaultList[blankSymbol.value] = "./blank.png";
  fetchEmoji(token.value)
    .then(emojiParser)
    .then((emojiList) => {
      let list = Object.assign(defaultList, emojiList);
      let canvas = Array(parseInt(row.value)).fill()
                    .map(() =>
                      Array(parseInt(column.value)).fill()
                        .map(() => blankSymbol.value)
                    );
      unmountComponentAtNode(container);
      render(
        <App emojiList={list} canvas={canvas} blankSymbol={blankSymbol.value}></App>,
        container
      );
    });
});

[fetcher, token, row, column, blankSymbol].forEach(e => e.addEventListener("keypress", event => event.key === "Enter" ? fetcher.click() : false));

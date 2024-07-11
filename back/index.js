const express = require("express");
import request from "request";
import cheerio from "cheerio";
const app = express();
const port = 3001;

app.get("/", (req, res) => {});

app.get("/crawl", (req, res) => {
  const url = "https://www.google.com";

  request(url, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      const title = $("title").text();
      res.send(`The title of ${url} is: ${title}`);
    } else {
      res.send(`Error crawling ${url}`);
    }
  });
});

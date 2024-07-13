const express = require('express');
const cron = require('node-cron')
const start_crawl = require('./crawl/Check_Solve')
const app = express();
app.use(express.json());

start_crawl();

cron.schedule('0 0 * * *', () => {
   console.log('크롤링 시작');
   start_crawl();
})
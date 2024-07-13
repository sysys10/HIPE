const express = require('express');
const cron = require('node-cron')
const start_crawl = require('./crawl/Check_Solve')
require('dotenv').config(); 
const app = express();
app.use(express.json());

const port = process.env.PORT || 3001;
start_crawl();

cron.schedule('0 0 * * *', () => {
   console.log('크롤링 시작');
   start_crawl();
})



app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행중`)
})
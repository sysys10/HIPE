const puppeteer = require("puppeteer");
const Data_File = require("./Data_file");
const CheckBoj = require("./Check_Boj");
const {user_tier} = require ("./util")
const { Add_penalty } = require("./db");


const get_streak = async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  for (const member of Data_File.member_Data) {
    const boj_id = member.boj_id;

    try {
      await page.goto(`https://solved.ac/profile/${boj_id}`, {
        waitUntil: "networkidle2",
      });
      const data = await page.evaluate(() => {
        const elements = document.querySelectorAll(".css-1midmz7 b");
        return {
          rating: elements[0].textContent,
          streak: elements[1].textContent,
          full_solved: elements[2].textContent,
        };
      });
      const { rating, streak, full_solved } = data;
      console.log(
        `${boj_id} ${member.name}님의 티어:${user_tier(parseInt(rating, 10))} 레이팅: ${rating} 스트릭:${streak} 총 푼 문제:${full_solved}입니다.\n\n`
      );
      //유저에 레이팅, 스트릭, 푼 전체 문제 추가
      
      if (streak !== "0") {
        CheckBoj(boj_id);
      } else {
      
      }

    } catch (error) {
      console.log(`Error fetching data for BOJ ID: ${boj_id}`, error.message);
    }
  }
  await browser.close();
};

module.exports = get_streak;

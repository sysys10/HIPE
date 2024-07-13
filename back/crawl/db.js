const Data_File = require("./Data_file");
const { MongoClient } = require("mongodb");
const { findTier } = require("./util");
const User = require("../models/User");
const mongoose = require("mongoose");
const Solved = require("../models/Solved");
require("dotenv").config(); // dotenv 설정
mongoose
  .connect(
    'mongodb+srv://yunsu102896:MWcStIHbJoDX6tY2@cluster0.tnn54b9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    {
      useNewUrlPaser: true,
      useUnifiedTofology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    }
  )

const add_to_user =  (data) => {
  User.boj_id = data.boj_id;
  console.log(User.boj_id);
};

// Function to add solved problems to the database
const Add_to_solved =  ({ boj_id, solved }) => {
  if (!Array.isArray(solved) || solved.length === 0) {
    console.error("No solved problems to add.");
    return;
  }
  solved.forEach(({ problemNumber, submissionTimestamp }) => {
    console.log(
      `이름:${boj_id}: 오늘 푼 문제 ${problemNumber} 티어:${findTier(
        problemNumber
      )} 시간: ${submissionTimestamp} \n`
    );
    // 여기서 문제 해결 시간과 번호를 DB에 업데이트하는 로직 구현
  });

  let penalty = 0;
};

const Add_not_solved = (boj_id) => {
  console.log(`${boj_id}님은 하나도 안풀었습니당`);
};

module.exports = { Add_to_solved, Add_not_solved, add_to_user };

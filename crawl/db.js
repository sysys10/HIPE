const Data_File = require("./Data_file");

// Function to find the tier based on the number provided
const findTier = (n) => {
  if (!(n in Data_File.tier_dicts)) {
    return "Unknown";
  }

  let tier = Data_File.tier_dicts[n];
  let b = 5 - (tier % 5);
  let a = Math.floor(tier / 5);

  switch (a) {
    case 0:
      return `브론즈 ${b}`;
    case 1:
      return `실버 ${b}`;
    case 2:
      return `골드 ${b}`;
    case 3:
      return `플래티넘 ${b}`;
    case 4:
      return `다이아 ${b}`;
    case 5:
      return `루비 ${b}`;
    default:
      return "Unknown";
  }
};

// Function to add solved problems to the database
const Add_to_solved = ({ boj_id, solved }) => {
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
const Add_penalty = ({ boj_id, penalty }) => {
  // 패널티 1000원 넣기
};

module.exports = { Add_to_solved, Add_penalty };

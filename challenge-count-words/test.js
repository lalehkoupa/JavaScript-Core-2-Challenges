const str = "You and me and You";
const calculateWords = (chapterOfABook) => {
  const wordCount = {};
  let wordArr = str.split(" ");
  wordArr.forEach((word) => {
    Object.keys(wordCount).includes(word)
      ? (wordCount[word] += 1)
      : (wordCount[word] = 1);
  });
  return wordCount;
};
console.log(calculateWords(str));

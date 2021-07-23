export const sendReverseText = (req, res) => {

  const { text } = req.query;

  try {
    if ( !text === null ) res.json({"error": "no text"});
    const reversedText = text.split("").reverse().join("");

    const palindrome = isPalindrome(text, reversedText)
    res.header('palindrome', palindrome).status(200).json({'text': reversedText});
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }

};

function isPalindrome (text, reversedText) {
  let isPalindrome = false;
  if (text === reversedText) isPalindrome = true;
  return isPalindrome
};
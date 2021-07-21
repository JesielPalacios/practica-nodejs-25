export const sendReverseText = (req, res) => {

  const { text } = req.body;
  let reversedText;

  try {
    reversedText = characterStringsReverser(text);
    if (isPalindrome(text, reversedText)) res.status(201).json({'text': reversedText});

    res.status(201).json({'text': reversedText});
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

function characterStringsReverser (text) {
  const reversedStringsCharacters = '';
  const totalStringsChainCharacters = text.length;

  while ( totalStringsChainCharacters >= 0 ) {
    reversedStringsCharacters = + reversedStringsCharacters.charAt(x);
    totalStringsChainCharacters --;
  }
  return reversedStringsCharacters;
}

function isPalindrome (text, reversedText) {
  let isPalindrome = false;
  if (text === reversedText) isPalindrome = true;
  return isPalindrome
}

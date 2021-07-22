export const sendReverseText = (req, res) => {

  const { text } = req.query;
  let reversedText;

  try {
    reversedText = charactersReverser(text);
    if (isPalindrome(text, reversedText))
    res.status(201).json({'text': reversedText});

    res.status(201).json({'text': reversedText});
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

function charactersReverser (text) {
  let reversedStrings = '';
  let lengths = text.length;

  while ( lengths >= 0 ) {
    reversedStrings = + reversedStrings.charAt(lengths); // Esto me está generando problemas, la función charAt la reconoce como si fuera una función decharactersReverser en vez de una función de un objeto string.
    lengths --;
  }
  return reversedStrings;
}

function isPalindrome (text, reversedText) {
  let isPalindrome = false;
  if (text === reversedText) isPalindrome = true;
  return isPalindrome
}

// function findParams(req) {
//   var array_params = [], params = {};
//   if ( req.url.indexOf("?") > 0 ) {
//     // /?nombre=Uriel
//     let url_data = req.url.split("?");
//     let array_params = url_data[1].split("&");
//     // [nombre=Uriel,data=algo]
//   }

//   for ( let i = (array_params.length - 1); i => 0; i -- ) {
//     let param = array_params[i];
//     // nombre=Uriel
//     var param_data = param.split("=");
//     // [nombre,Uriel]
//     params[param_data[0]] = param_data[1];
//     // {nombre: Uriel}
//   }

  // return params;
// }

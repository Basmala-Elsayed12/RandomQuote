var quotesArr = [
  "You miss 100% of the shots you don't take.",
  "The best revenge is massive success.",
  "Do not take life too seriously. You will not get out alive.",
  "Resentment is like drinking poison and waiting for your enemies to die.",
  "It's not what happens to you, but how you react to it that matters.",
];
var writersArr = [
  "--Wayne Gretzy",
  "--Frank Sinatra",
  "--Elbert Hubbard",
  "--Nelson Mandela",
  "--Epictetus",
];

function generateQuote() {
  var quoteContainer = document.getElementById("quoteContainer");
  quoteContainer.innerHTML = "";
  var i = Math.floor(Math.random() * quotesArr.length); //rondom (0-1)*quotesarr=(0-4)

  quoteContainer.innerHTML += `<h3>${quotesArr[i]}</h3>
          <br>
          <h3>${writersArr[i]}</h3>`;
}

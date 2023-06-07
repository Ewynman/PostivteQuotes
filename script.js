$(document).ready(function () {
  // typing text animation script
  var typed = new Typed(".typing", {
    strings: shuffleArray(getQuotes()),
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // function to read quotes from text file
  function getQuotes() {
    var quotes = [];
    $.ajax({
      url: "quotes.txt",
      async: false,
      success: function (data) {
        quotes = data.split("\n");
      },
      error: function () {
        console.log("Error reading quotes file.");
      },
    });
    return quotes;
  }

  // function to shuffle an array using Fisher-Yates algorithm
  function shuffleArray(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
});

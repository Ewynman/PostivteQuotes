$(document).ready(function () {
    // typing text animation script
    var typed = new Typed(".typing", {
      strings: getQuotes(),
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
  });
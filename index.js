

var quotes = ["“Be yourself.. everyone else is already taken.” -Oscar Wilde" ,
             "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ― Albert Einstein" ,
              "“So many books, so little time.” ― Frank Zappa",
            "“A room without books is like a body without a soul.” ― Marcus Tullius Cicero" ,
          "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ― Dr. Seuss",
        "“You only live once, but if you do it right, once is enough.” ― Mae West",
      "“Be the change that you wish to see in the world.” ― Mahatma Gandhi",
    "“In three words I can sum up everything I've learned about life: it goes on.” ― Robert Frost",
  "“If you tell the truth, you don't have to remember anything.” ― Mark Twain" ,
"“A friend is someone who knows all about you and still loves you.”― Elbert Hubbard",
"“To live is the rarest thing in the world. Most people exist, that is all.” ― Oscar Wilde",
"“Always forgive your enemies; nothing annoys them so much.” ― Oscar Wilde" ,
"“We accept the love we think we deserve.” ― Stephen Chbosky, The Perks of Being a Wallflower"]


function getQuote () {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomIndex];
  
  return randomQuote;

}
// Event listener for the button click
var quoteBtn = document.getElementById("quoteBtn");
quoteBtn.addEventListener("click", function() {
  var quoteHere = document.getElementById("quoteHere");
  quoteHere.textContent = getQuote ();
});

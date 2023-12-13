//   const btn = document.getElementById("java-btn");
//   btn.addEventListener("click", generate());
function generate() {
  let quotes = {
    "Albert Einstein":
      "“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.”",
    "Jules Renard":
      "“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”",
    "Pierce Brown":
      "“Man cannot be freed by the same injustice that enslaved it.”",
    "Deepak Chopra":
      "“Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.”",
    "Mary Astell":
      "“If all men are born free, how is it that all women are born slaves?”",
    "C.S Lewis": "“I was not born to be free---I was born to adore and obey.”",
  };

  let authors = Object.keys(quotes);
  // console.log(authors);
  let author = authors[Math.floor(Math.random() * authors.length)];

  let quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}

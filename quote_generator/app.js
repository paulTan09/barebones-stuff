let quotes = [
  "You are standing in the rain and I am offering you a goddamn umbrella, and you throw it on the floor and yell at God to abolish rain.",
  "Life will always have ups and downs. And if we don't have the bad parts, we'll never appreciate the good ones.",
  "Such is the cruel physics of love, that those who crave it most will repel it and only the dang rich get richer.",
  "I wade through honey-rich excess while you starve of your own volition.",
  "The wise man is blessed with knowledge once but the fool is blessed to learn every day."
];
let theButton = document.querySelector("button");


theButton.addEventListener("click", function() {

  let main = document.querySelector("main");
  let quoteRandomizer = Math.floor(Math.random() * quotes.length);
  
  main.innerHTML = quotes[quoteRandomizer];
  
})

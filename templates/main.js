// Array of motivational quotes
const quotes = [
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    // Add more quotes here
  ];

  // Get elements
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  const newQuoteButton = document.getElementById("newQuoteBtn");

  // Generate a random quote
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  // Display a new quote
  function displayNewQuote() {
    const randomQuote = getRandomQuote();
    quoteElement.textContent = randomQuote.text;
    authorElement.textContent = "- " + randomQuote.author;
  }

  // Load a random quote on page load
  window.addEventListener("load", displayNewQuote);

  // Load a new quote on button click
  newQuoteButton.addEventListener("click", displayNewQuote);

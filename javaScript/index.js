console.clear();

// change bookmark backgrouncolor by click bookmark button
function handleBookmarkButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("bookmark_icon_active");
}

const bookmarkButtons = document.querySelectorAll(
  '[data-js="bookmark-button"]'
);
bookmarkButtons.forEach((bookmarkButton) => {
  bookmarkButton.addEventListener("click", handleBookmarkButtonClick);
});

// show and hidden the answer
function handleAnswerButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("summary-toggle");
}
const answerCards = document.querySelectorAll('[data-js="summary-toggle"]');
answerCards.forEach((answerCard) => {
  answerCard.addEventListener("click", handleAnswerButtonClick);
});

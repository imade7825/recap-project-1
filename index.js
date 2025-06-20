console.clear();

// change bookmark backgrouncolor by click bookmark button
function handleBookmarkButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("bookmark_icon_active");
}
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
bookmarkButton.addEventListener("click", handleBookmarkButtonClick);

// show and hidden the answer
function handleAnswerButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("card_answer_visible");
}
const answerCard = document.querySelector('[data-js="answer-show-hidden"]');
answerCard.addEventListener("click", handleAnswerButtonClick);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('[data-js="form"]');

  const cardsContainer = document.querySelector("[data-js= cardContainer]");
  //console.log(cardsContainer);

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const question = form.querySelector("#question").value;
    console.log(question);
    const answer = form.querySelector("#answer").value;
    console.log(answer);
    // const tag = form.querySelector("#tag").value;
    // console.log(tag);

    // Create card element
    const newCard = document.createElement("article");
    newCard.classList.add("card");
    newCard.innerHTML = `
    
          <article class="card">
          <h2 class="card__question">${question}</h2>
          <details class="card__answer">
            <summary
              class="summary-toggle"
              data-js="answer-show-hidden"
            ></summary>
            <p>${answer}</p>
          </details>
          <ul class="tag_list">
            <li class="tag_list_item">Asia</li>
            <li class="tag_list_item">Africa</li>
            <li class="tag_list_item">Europe</li>
          </ul>
          <button
            class="bookmark"
            data-js="bookmark-button"
            aria-label="Bookmark this question"
          >
            <img src="assets/bookmark.png" alt="Bookmark" />
          </button>
        </article>
        `;
    console.log(newCard);
    // Append card to cards container
    cardsContainer.append(newCard);

    // Clear form fields
    form.reset();
  });
});

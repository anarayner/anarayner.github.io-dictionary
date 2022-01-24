const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const sound = document.getElementById("sound");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  let searchWord = document.getElementById("serch_box__word").value;
  console.log(searchWord);
  fetch(`${url}${searchWord}`)
    .then((response) => response.json())
    .then((word) => {
      console.log(word);
      result.innerHTML = ` 
        <div class="result__word">
        <h3>Sample</h3>
        <button class="result__volume">
          <i class="fas fa-volume-down"></i>
        </button>
      </div>
      <div class="details">
        <p>pos</p>
        <p>/sample/</p>
      </div>
          <p class="word-meaning">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p class="word-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          suscipit euismod magna, sit amet varius ante lacinia eget. Donec
          pretium tristique vulputate.
        </p>`;
    });
});

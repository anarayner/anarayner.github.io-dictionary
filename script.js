const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const sound = document.getElementById("audio");
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
        <h3>${searchWord}</h3>
        <button class="result__volume" onclick="playSound()">
          <i class="fas fa-volume-down"></i>
        </button>
      </div>
      <div class="details">
        <p>${word[0].meanings[0].partOfSpeech}</p>
        <p>/${word[0].phonetic}/</p>
      </div>
          <p class="word-meaning">
          <span>def:</span> ${
            word[0].meanings[0].definitions[0].definition
          }<br/><span>def:</span>  ${
        word[0].meanings[0].definitions[1].definition
      }
        </p>
        <p class="word-description">
         ${word[0].meanings[0].definitions[0].example || ""}<br/>${
        word[0].meanings[0].definitions[1].example || ""
      }
        </p>`;
      sound.setAttribute("src", `http:${word[0].phonetics[0].audio}`);
      console.log(sound);
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = ` 
        <div class="result__word">
        <h3>Sorry, we couldn't find definitions for the word you were looking for.</h3>`;
    });
});

function playSound() {
  sound.play();
}

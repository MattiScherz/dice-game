// Step 2: Randomize a dice roll (make sure it's an integer number)

// Step 3: Update the user interface (document) to show the diceface (svg image)
let diceMessage = document.getElementById(`dice-message`);
let diceFace = document.getElementById(`dice-face`);

function = rollTheDice() {
  let diceValue = Math.floor(Math.random() * 6 + 1);

  diceMessage.innerHTML = `You rolled: ${diceValue}`;
  diceFace.innerHTML = `<img src="img/dice${diceValue}.svg">`;
}

document.getElementById(`btn`).addEventListener(`click`, rollTheDice);

// Step 4: Convert the roll number (for example: 3) to a word ("three")

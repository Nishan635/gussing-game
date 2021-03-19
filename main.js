let randomNumber = Math.floor(Math.random() * 100) + 1;
		let previousGuess = document.querySelector('.previousGuess');
		let previousResult = document.querySelector('.previousResult');
		let lowOrhigh = document.querySelector('.lowOrhigh');
		let guessField = document.querySelector('.guessField');
		let guessSubmit = document.querySelector('.guessSubmit');
		let guessCount = 1;
		let resetButton;

		function checkGuess() {
			let userGuess = Number(guessField.value);
			if(guessCount === 1) {
				previousGuess.textContent = 'Previous guess: ';
			}

			previousGuess.textContent += userGuess + ' ';

			if(userGuess === randomNumber) {
				previousResult.textContent = 'Congratulation! You got it right';
				previousResult.style.backgroundColor = 'green';
				lowOrhigh.textContent = '';
				setGameOver();
			} else if(guessCount === 10) {
				previousResult.textContent = '!!!GAME OVER!!!';
				lowOrhigh = '';
				setGameOver();
			} else {
				previousResult.textContent = 'WRONG!';
				previousResult.style.backgroundColor = 'red';
				if(userGuess < randomNumber) {
					lowOrhigh.textContent = 'Last guess are too low!';
				} else if(userGuess > randomNumber) {
					lowOrhigh.textContent = 'Last guess are too high!';
				}
			}

			guessCount++;
			guessField.value = '';
			guessField.focus();
		}

       guessSubmit.addEventListener('click', checkGuess);

       function setGameOver() {
       	guessField.disabled = true;
       	guessSubmit.disabled = true;
       	resetButton = document.createElement('button');
       	resetButton.textContent = 'Start new game';
       	document.body.appendChild(resetButton);
       	resetButton.addEventListener('click', resetGame);
       } 

       function resetGame() {
        guessCount = 1;
        const resetParas = document.querySelectorAll('.result p');
        for(let i = 0; i < resetParas.length; i++) {
        	resetParas[i].textContent = '';
        }

       	
       	resetButton.parentNode.removeChild(resetButton);
       	guessField.disabled = false;
       	guessSubmit.disabled = false;
       	guessField.value = '';
       	guessField.focus();
       	previousResult.style.backgroundColor = 'white';
        randomNumber = Math.floor(Math.random() * 100) + 1;
       }
<script>
	let randomNumber = Math.floor(Math.random() * 100) + 1;
	const guesses = document.querySelector('.guesses');
	const lastResult = document.querySelector('.lastResult');
	const lowOrHi = document.querySelector('.lowOrHi');

	const guessSubmit = document.querySelector('.guessSubmit');
	const guessField = document.querySelector('.guessField');

	let guessCount = 1;
	let resetButton;

	<p class="guesses"></p>
	<p class="lastResult"></p>
	<p class="lowOrHi"></p>

	<label for="guessField">Enter a guess: </label><input type="text" id ="guessField" class="guessField">
	<input type="submit" value="Submit guess" class="guessSubmit">

	// function
	function checkGuess() {
		alert('I am a placeholder');
	}

</script>

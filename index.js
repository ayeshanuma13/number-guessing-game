function generateRandomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess(){
    let guess = Number(prompt("Enter your guess"))
    if (!Number.isInteger(guess) || guess < 1 || guess > 100 ){
        alert("Please enter a valid input");
        return getPlayerGuess();
    }
    else{
        return guess;
    }    
}

function checkGuess(correct, guess){
    if(guess === correct){
        alert("You guessed it right");
        return true;
    }
    else if(guess < correct){
        alert("Try higher");
    }
    else{
        alert("Try lower");
    }
    return false;
}

function mainGame(){
    let correctNumber = generateRandomNumber();

    let counter = 0;
    let points = 100;
    let guessedCorrectly = false;

    while (counter < 10 && !guessedCorrectly) {
        let guess = getPlayerGuess();
        guessedCorrectly = checkGuess(correctNumber, guess);
        if (!guessedCorrectly) {
            counter++; 
            points -= 10;
        }
    }

    if (guessedCorrectly) {
        alert(`You guessed the number in ${counter} attempts!`);
    } else {
        alert(`You've exceeded your attempts. The correct number was ${correctNumber}.`);
    }

    alert(`Your score is ${guessedCorrectly ? Math.max(points, 0) : 0}`);
}

function startGame(){
    do {
        mainGame();
    } while (confirm("Would you like to play again?"));
    
    alert("Thanks for playing!");
}

startGame();


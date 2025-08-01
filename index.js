function generateRandomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess(){
    let input = prompt("Enter your guess (1 to 100):");

    if (input === null) {
        let quit = confirm("Do you want to quit the game?");
        if (quit) {
            alert("Thanks for playing!");
            throw new Error("User exited the game.");
        } else {
            return getPlayerGuess();
        }
    }

    let guess = Number(input);

    if (!Number.isInteger(guess) || guess < 1 || guess > 100 ){
        alert("Please enter a valid input");
        return getPlayerGuess();
    }

    return guess;
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
    alert(`COORDINATE LOCKED IN!`);
    alert(`You cracked the code in ${counter } attempts!`);
    alert(`Remaining energy: ${Math.max(points, 0)}%`);
    alert(`
         MISSION SUCCESSFUL!
         The alien AI acknowledges your intelligence.
         Ship control restored. Course set for home.
        "Human logic... unexpectedly effective."`);
    } else {
        alert(`COORDINATE SEQUENCE FAILED.`);
        alert(`All attempts used. The correct number was ${correctNumber}.`);
    alert(`
        MISSION FAILED.
        
        The AI remains silent.
        Reactor core overload imminent.
        
        "Perhaps next time, carbon unit."`);
    }
}

function startGame(){
    do {
        mainGame();
    } while (confirm("Would you like to play again?"));
    
    alert("Thanks for playing!");
}

alert(`
🚨 TRANSMISSION INCOMING... 🚨

📡 [GALACTIC ENCRYPTED MESSAGE DECODED]

👤 Captain, we’ve intercepted a signal from an ancient alien AI. 
It has locked down our ship and issued a challenge.

🤖 "GUESS THE PRIME COORDINATE — A NUMBER BETWEEN 1 AND 100."

You have 10 attempts before the reactor overloads. Each failed attempt drains 
your energy core by 10%.

🌌 Success means freedom. Failure... well, let's not go there.

🧠 Engage logic. Trust your instincts. And may the data be with you.

> Initializing challenge...
`);


startGame();


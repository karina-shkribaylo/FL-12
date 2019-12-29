let game;
confirm('Do you want to play a game?') ? game = true : alert('You did not become a billionaire, but can.');

const three = 3;
const eight = 8;
const hundred = 100;
let maxRandomNumber = 8;
let firstAttemptPrize = 100;
let secondAttemptPrize = 50;
let thirdAttemptPrize = 25;
const rangeIncrement = 4;
const prizeIncrement = 2;
let prize = 0;
let userBet;
let attempts = 3;




while (game) {
    let gameOver = false;

    let prizeValues = [thirdAttemptPrize, secondAttemptPrize, firstAttemptPrize];
    let pocketNumber = Math.floor(Math.random() * (maxRandomNumber + 1));

    // one level of the game with 3 attempts
    while (attempts) {
        userBet = parseInt(prompt(`Enter a number from 0 to ${maxRandomNumber}
Attempts left: ${attempts--}
Total prize: $${prize}
Possible prize on current attempt: $${prizeValues[attempts]}`));
        if (userBet === pocketNumber) {
            prize += prizeValues[attempts];
            let nextLevel = confirm(`Congratulation, you won! Your prize is: $${prize}. Do you want to continue?`);
            if (nextLevel) {
                maxRandomNumber += rangeIncrement;
                firstAttemptPrize *= prizeIncrement;
                secondAttemptPrize *= prizeIncrement;
                thirdAttemptPrize *= prizeIncrement;
            } else {
                gameOver = true;
            }
            break;
        } else if (attempts === 0) {
            gameOver = true;
        }
    }

    // ask user to start over if they lost (used all 3 attempts) or decided not to continue after win
    if (gameOver) {
        alert(`Thank you for your participation. Your prize is: $${prize}`);
        let anotherAsk = confirm('Do you wat to play again ?');
        if (anotherAsk) {
            prize = 0;
            maxRandomNumber = eight;
            attempts = three;
            continue;
        } else {
            break;
        }
    }
}

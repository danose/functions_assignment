let score = 0;
let num = 2;
let input = parseInt(prompt(`Guess a number between 1 and ${num}`));
//Generate a random number
let randomNumberGenerator = (num) => {

    return random = Math.floor(Math.random() * num) + 1;
   
}
// nextstage if user guesses correctly
let nextStage = (num)=>{
    let nextInput = parseInt(prompt(`Guess a number between 1 and ${num}`));
    let nextRandom = randomNumberGenerator(num);
    
    if (nextInput == nextRandom){
        score++;
        num++;
        console.log(`your score is ${score}`);
        nextStage(num);

    }
    else if(nextInput != nextRandom){
        console.log('Game Over')
    }
}

// compare number gotten from user with generated num and increase score by1 when they are equal and move to next stage
let randomNumber = randomNumberGenerator(num)

if (input == randomNumber){
    score++;
    num++
    console.log(`your score is ${score}`);
    nextStage(num); 
}
else if (input != random){
    console.log ('Game over')
}
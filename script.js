// // app.js

// // Complete logic of game inside this function
// const game = () => {
//     let playerScore = 0;
//     let computerScore = 0;
//     let moves = 0;


//     // Function to 
//     const playGame = () => {
//         const rockBtn = document.querySelector('.rock');
//         const paperBtn = document.querySelector('.paper');
//         const scissorBtn = document.querySelector('.scissor');
//         const playerOptions = [rockBtn, paperBtn, scissorBtn];
//         const computerOptions = ['rock', 'paper', 'scissors']

//         // Function to start playing game
//         playerOptions.forEach(option => {
//             option.addEventListener('click', function () {

//                 const movesLeft = document.querySelector('.movesleft');
//                 moves++;
//                 movesLeft.innerText = `Moves Left: ${10 - moves}`;


//                 const choiceNumber = Math.floor(Math.random() * 3);
//                 const computerChoice = computerOptions[choiceNumber];

//                 // Function to check who wins
//                 winner(this.innerText, computerChoice)

//                 // Calling gameOver function after 10 moves
//                 if (moves == 10) {
//                     gameOver(playerOptions, movesLeft);
//                 }
//             })
//         })

//     }

//     // Function to decide winner
//     const winner = (player, computer) => {
//         const result = document.querySelector('.result');
//         const playerScoreBoard = document.querySelector('.p-count');
//         const computerScoreBoard = document.querySelector('.c-count');
//         player = player.toLowerCase();
//         computer = computer.toLowerCase();
//         if (player === computer) {
//             result.textContent = 'Tie'
//         }
//         else if (player == 'rock') {
//             if (computer == 'paper') {
//                 result.textContent = 'Computer Chose Paper. Computer Won.';
//                 computerScore++;
//                 computerScoreBoard.textContent = computerScore;

//             } else {
//                 result.textContent = 'Computer Chose Scissors. Player Won.'
//                 playerScore++;
//                 playerScoreBoard.textContent = playerScore;
//             }
//         }
//         else if (player == 'scissors') {
//             if (computer == 'rock') {
//                 result.textContent = 'Computer Chose Rock. Computer Won.';
//                 computerScore++;
//                 computerScoreBoard.textContent = computerScore;
//             } else {
//                 result.textContent = 'Computer Chose Paper. Player Won.';
//                 playerScore++;
//                 playerScoreBoard.textContent = playerScore;
//             }
//         }
//         else if (player == 'paper') {
//             if (computer == 'scissors') {
//                 result.textContent = 'Computer Chose Scissors. Computer Won.';
//                 computerScore++;
//                 computerScoreBoard.textContent = computerScore;
//             } else {
//                 result.textContent = 'Computer Chose Rock. Player Won.';
//                 playerScore++;
//                 playerScoreBoard.textContent = playerScore;
//             }
//         }
//     }

//     // Function to run when game is over
//     const gameOver = (playerOptions, movesLeft) => {

//         const chooseMove = document.querySelector('.move');
//         const result = document.querySelector('.result');
//         const reloadBtn = document.querySelector('.reload');

//         playerOptions.forEach(option => {
//             option.style.display = 'none';
//         })


//         chooseMove.innerText = 'Game Over!!'
//         movesLeft.style.display = 'none';

//         if (playerScore > computerScore) {
//             result.style.fontSize = '2rem';
//             result.innerText = 'You Won The Game'
//             result.style.color = '#308D46';
//         }
//         else if (playerScore < computerScore) {
//             result.style.fontSize = '2rem';
//             result.innerText = 'You Lost The Game';
//             result.style.color = 'red';
//         }
//         else {
//             result.style.fontSize = '2rem';
//             result.innerText = 'Tie';
//             result.style.color = 'grey'
//         }
//         reloadBtn.innerText = 'Restart';
//         reloadBtn.style.display = 'flex'
//         reloadBtn.addEventListener('click', () => {
//             window.location.reload();
//         })
//     }


//     // Calling playGame function inside game
//     playGame();

// }

// // Calling the game function
// game();


let playerScore = 0;
        let computerScore = 0;
        const choices = ['rock', 'paper', 'scissors'];
        const resultDiv = document.getElementById('result');
        const playerScoreSpan = document.getElementById('player-score');
        const computerScoreSpan = document.getElementById('computer-score');

        document.querySelectorAll('.choice-btn').forEach(button => {
            button.addEventListener('click', () => {
                const playerChoice = button.dataset.choice;
                const computerChoice = choices[Math.floor(Math.random() * 3)];
                const winner = getWinner(playerChoice, computerChoice);
                
                resultDiv.innerHTML = `
                    You chose ${getEmoji(playerChoice)} 
                    vs 
                    ${getEmoji(computerChoice)}<br>
                    ${getResultMessage(winner)} 
                    ${getResultEmoji(winner)}
                `;
                
                updateScore(winner);
                addConfetti(winner);
            });
        });

        document.getElementById('reset-btn').addEventListener('click', () => {
            playerScore = 0;
            computerScore = 0;
            playerScoreSpan.textContent = '0';
            computerScoreSpan.textContent = '0';
            resultDiv.textContent = "Game Reset! Let's Play Again 🌸";
        });

        function getEmoji(choice) {
            return {
                rock: '🪨',
                paper: '📜',
                scissors: '✂️'
            }[choice];
        }

        function getWinner(player, computer) {
            if (player === computer) return 'draw';
            if (
                (player === 'rock' && computer === 'scissors') ||
                (player === 'paper' && computer === 'rock') ||
                (player === 'scissors' && computer === 'paper')
            ) return 'player';
            return 'computer';
        }

        function getResultMessage(winner) {
            return {
                player: 'You Win! 🎉',
                computer: 'Computer Wins! 💻',
                draw: "It's a Tie! 🎀"
            }[winner];
        }

        function getResultEmoji(winner) {
            return {
                player: '🌸',
                computer: '🌧️',
                draw: '🎀'
            }[winner];
        }

        function updateScore(winner) {
            if (winner === 'player') playerScore++;
            if (winner === 'computer') computerScore++;
            playerScoreSpan.textContent = playerScore;
            computerScoreSpan.textContent = computerScore;
        }

        function addConfetti(winner) {
            if (winner === 'player') {
                // Add confetti library and call here
                console.log('🎉 Confetti time!');
            }
        }
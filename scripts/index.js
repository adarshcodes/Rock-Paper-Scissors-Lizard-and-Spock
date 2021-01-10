const callMeSupreme = () => {

    /* Rules Pop-up */
    const rules = () => {
        const btnModal = document.getElementById('rules');
        const container = document.querySelector('.container');
        const btnClose = document.querySelector('.close-btn');
        const overlay = document.querySelector('.modal-overlay');

        btnModal.addEventListener('click', function () {
            overlay.classList.add('open-modal');
            container.classList.add('container-blur');
        });

        btnClose.addEventListener('click', function () {
            overlay.classList.remove('open-modal');
            container.classList.remove('container-blur');
        });
    }

    /* Main Game Function */

    const mainGame = () => {
        const rps = document.querySelectorAll('.circle');
        const scoreElement = document.getElementById('score');
        const winner = document.querySelector('.winner');
        const mainGame = document.querySelector('.main-game');

        const computer = ['rock', 'paper', 'scissors'];
        let score = 0;

        rps.forEach((option) => {
            option.addEventListener('click', function (e) {

                mainGame.classList.add('hidding-magic');

                const user = e.target.id;
                const comp = computer[Math.floor(Math.random() * computer.length)];
                console.log(`user choice: ${user}`);
                console.log(`computer choice: ${comp}`);

                if (user === comp) {
                    winner.textContent = "It's a draw!";
                } else if (user === 'paper' && comp === 'rock') {
                    score++;
                    winner.textContent = "User wins!";
                    scoreElement.textContent = score;
                } else if (user === 'paper' && comp === 'scissors') {
                    if (score != 0) {
                        score--;
                    }
                    winner.textContent = "Computer wins!";
                    scoreElement.textContent = score;
                } else if (user === 'paper' && comp === 'rock') {
                    score++;
                    winner.textContent = "User wins!";
                    scoreElement.textContent = score;
                } else if (user === 'rock' && comp === 'paper') {
                    if (score != 0) {
                        score--;
                    }
                    winner.textContent = "Computer wins!";
                    scoreElement.textContent = score;
                } else if (user === 'rock' && comp === 'scissors') {
                    score++;
                    winner.textContent = "User wins!";
                    scoreElement.textContent = score;
                } else if (user === 'scissors' && comp === 'paper') {
                    score++;
                    winner.textContent = "User wins!";
                    scoreElement.textContent = score;
                } else if (user === 'scissors' && comp === 'rock') {
                    if (score != 0) {
                        score--;
                    }
                    winner.textContent = "Computer wins!";
                    scoreElement.textContent = score;
                }
            });
        });
    }

    /*Calling inner functions*/
    rules();
    mainGame();
}

callMeSupreme();
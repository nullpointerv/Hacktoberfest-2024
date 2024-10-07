let Randomnum = parseInt(Math.random() * 100 + 1);
const userinput = document.querySelector("#guessfield");
const submit = document.querySelector("#submit");
const guessslot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastresult");
const loworhigh = document.querySelector(".loworhigh");
const startover = document.querySelector(".result");
const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
    submit.addEventListener('click', function (event) {
        event.preventDefault();
        const guess = parseInt(userinput.value);
        console.log(guess);
        validateGuess(guess);
    });
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please Enter Valid Number");
    }
    else if (guess < 1) {
        alert("Please Enter Number More Than 1");

    }
    else if (guess > 100) {
        alert("Please Enter Number Less Than 100");
    }
    else {
        prevGuess.push(guess);

        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`TOHAAR GAME KHATAM BAA AURI RANDOM NUMBER RAHE ${Randomnum}`)
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}





function checkGuess(guess) {
    if (guess === Randomnum) {
        displayMessage(`SAHI JAWAB !! 7 CROREEE!!`);
        displayMessage(`SMART TO TU PAIDAESI HAI`)
        endGame();
    }
    else if (guess < Randomnum) {
        displayMessage(`BOHOT KAMMM`)

    }
    else if(guess > Randomnum){
        displayMessage(`BOHOT ZYAADAA`)

    }
}
function displayGuess(guess) {
    userinput.value = '';
    guessslot.innerHTML += `${guess} , `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}
function displayMessage(message) {
    loworhigh.innerHTML = `<h2>${message}</h2>`;
}


function endGame() {
    userinput.value = '';
    userinput.setAttribute("disabled", '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">CHAL ABB FIRSE KHEL</h2>`
    startover.appendChild(p);
    playGame = false;
    newGame();

}


function newGame() {
    const newGamebutton = document.querySelector('#newGame');
    newGamebutton.addEventListener('click', function (event) {

        Randomnum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        remaining.innerHTML = `${10-numGuess}`;
        guessslot.innerHTML = '';
        userinput.removeAttribute("disabled")
        startover.removeChild(p);
        playGame = true;
    });

}


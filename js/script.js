import messages from './modules/messages.js';

const consoleText = document.querySelector(".text");
const answers = document.querySelector(".answers");

document.addEventListener("keydown", type);

function type(e) {
    e.preventDefault();

    const isLetter = /^[a-zA-Z]$/.test(e.key);

    if (isLetter) {
        consoleText.innerText += e.key;
    }

    if (e.key == "Backspace") {
        consoleText.innerText = consoleText.innerText.slice(0, -1);
    }

    if (e.key == "Enter") {

        if (consoleText.innerText == "clear" || consoleText.innerText == "cls") {
            cleanCommand();
        }

        else if (consoleText.innerText == "help") {
            simpleCommand(messages.help);
        }

        else if (consoleText.innerText == "forfun") {
            simpleCommand(messages.forfun);
        }

        else if (consoleText.innerText == "whoami") {
            simpleCommand(messages.whoami);
        }

        else if (consoleText.innerText == "skills") {
            simpleCommand(messages.skills);
        }

        else if (consoleText.innerText == "social") {
            simpleCommand(messages.social);
        }

        else if (consoleText.innerText == "joke") {
            fetchCommand(messages.jokes, "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart");
        }

        else if (consoleText.innerText == "pika") {
            fetchCommand(messages.jokes, "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart");
        }

        else if (consoleText.innerText == "btc") {
            fetchCommand(messages.btc, "https://blockchain.info/ticker");
        }

        else if (consoleText.innerText == "dance") {
            fetchCommand(messages.dance, "https://api.waifu.pics/sfw/dance");
        }

        else if (consoleText.innerText == "dog") {
            fetchCommand(messages.dog, "https://dog.ceo/api/breeds/image/random");
        }

        else if (consoleText.innerText == "steam") {
            fetchCommand(messages.steam, "https://playerdb.co/api/player/steam/bakanull");
        }

        else {
            addUserLine(consoleText.innerText);
            consoleText.innerText = "";
            addMessages(["This command does not exist."]);
        }
    }
}

function addUserLine(text) {
    const p = document.createElement("p");
    p.innerHTML = `coelho@marcus.com > <span class="command">${text}</span>`;
    answers.appendChild(p);
    scrollToBottom();
}

function addConsoleLine(text) {
    const p = document.createElement("p");
    p.innerHTML = `${text}`;
    p.classList.add("typing");
    p.classList.add("console");
    answers.appendChild(p);
    scrollToBottom();
}

function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}

function cleanCommand() {
    const tutorial = document.querySelector("p");
    tutorial.innerHTML = ``;
    answers.innerHTML = ``;
    consoleText.innerText = "";
}

function simpleCommand(array) {
    addUserLine(consoleText.innerText);
    consoleText.innerText = "";
    addMessages(array);
}

async function addMessages(array) {
    for (let i = 0; i < array.length; i++) {
        await new Promise(resolve => setTimeout(() => {
            addConsoleLine(array[i]);
            resolve();
        }, i * 10));
    }
}

function fetchCommand(array, urlFetch) {
    addUserLine(consoleText.innerText);
    consoleText.innerText = "";
    addFetchMessages(array, urlFetch);
}

async function addFetchMessages(array, urlFetch) {
    const reponseAPI = await fetch(urlFetch);
    const json = await reponseAPI.json();

    for (let i = 0; i < array.length; i++) {
        await new Promise(resolve => setTimeout(() => {
            const temp = array[i];
            addConsoleLine(eval('`' + temp + '`'));
            resolve();
        }, i * 10));
    }
}


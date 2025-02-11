import messages from './modules/messages.js';
import useTheme from './modules/themes.js';

const consoleText = document.querySelector(".text");
const username = document.querySelector(".username");
const divider = document.querySelector(".divider");
const path = document.querySelector(".path");
const pathDefault = " ";
const answers = document.querySelector(".answers");

document.addEventListener("keydown", type);
function type(e) {
    e.preventDefault();

    const isLetter = /^.$/.test(e.key);
    if (isLetter) {
        consoleText.innerText += e.key;
    }

    if (e.key == " ") {
        consoleText.innerHTML += `<span>&nbsp;</span>`
    }

    if (e.key == "Backspace") {
        consoleText.innerText = consoleText.innerText.slice(0, -1);
    }

    if (e.key == "Enter") {

        if (consoleText.innerHTML == "clear" || consoleText.innerText == "cls") {
            cleanCommand();
        }

        else if (consoleText.innerHTML == "help") {
            simpleCommand(messages.help);
        }

        else if (consoleText.innerHTML == "forfun") {
            simpleCommand(messages.forfun);
        }

        else if (consoleText.innerHTML == "marcus") {
            simpleCommand(messages.marcus);
        }

        else if (consoleText.innerHTML == "skills") {
            simpleCommand(messages.skills);
        }

        else if (consoleText.innerHTML == "social") {
            simpleCommand(messages.social);
        }

        else if (consoleText.innerHTML == "joke") {
            fetchCommand(messages.jokes, "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart");
        }

        else if (consoleText.innerHTML == "btc") {
            fetchCommand(messages.btc, "https://blockchain.info/ticker");
        }

        else if (consoleText.innerHTML == "dance") {
            fetchCommand(messages.dance, "https://api.waifu.pics/sfw/dance");
        }

        else if (consoleText.innerHTML == "dog") {
            fetchCommand(messages.dog, "https://dog.ceo/api/breeds/image/random");
        }

        else if (consoleText.innerHTML == "themes") {
            simpleCommand(messages.themes);
        }

        else if ((consoleText.innerHTML == "useTheme&nbsp;1") || (consoleText.innerHTML == "t1")) {
            useTheme(1);
            simpleCommand(["Switched to the default theme"]);
        }

        else if ((consoleText.innerHTML == "useTheme&nbsp;2") || (consoleText.innerHTML == "t2")) {
            useTheme(2);
            simpleCommand(["Switched to the cyberpunk theme"]);
        }

        else if ((consoleText.innerHTML == "useTheme&nbsp;2") || (consoleText.innerHTML == "t3")) {
            useTheme(3);
            simpleCommand(["Switched to the cold theme"]);
        }

        else if (consoleText.innerHTML == "ascii") {
            simpleCommand(messages.ascii);
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
    p.innerHTML = `${username.innerText}${path.innerText} <span class="divider">${divider.innerText} </span> <span class="command">${text}</span>`;
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


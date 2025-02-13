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


    const isLetter = /^.$/.test(e.key);
    if (isLetter) {
        consoleText.innerText += e.key;
    }

    if (e.key == " ") {
        consoleText.innerHTML += `<span>&nbsp</span>`
        e.preventDefault();
    }

    if (e.key == "Backspace") {
        consoleText.innerText = consoleText.innerText.slice(0, -1);
    }

    if (e.key == "Enter") {

        if (consoleText.innerHTML == "clear" || consoleText.innerHTML == "c" || consoleText.innerHTML == "cls") {
            cleanCommand();
        }

        else if ((consoleText.innerHTML == "help") || (consoleText.innerHTML == "h")) {
            simpleCommand(messages.help);
        }

        else if ((consoleText.innerHTML == "forfun") || (consoleText.innerHTML == "ff")) {
            simpleCommand(messages.forfun);
        }

        else if ((consoleText.innerHTML == "shortcut") || (consoleText.innerHTML == "s")) {
            simpleCommand(messages.shortcut);
        }

        else if (consoleText.innerHTML == "ee") {
            simpleCommand(messages.easteregg);
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

        else if (consoleText.innerHTML == "cat") {
            fetchCommand(messages.cat, "https://api.thecatapi.com/v1/images/search");
        }

        else if (consoleText.innerHTML == "themes") {
            simpleCommand(messages.themes);
        }

        else if ((consoleText.innerHTML == "useTheme &nbsp;") || (consoleText.innerHTML == "useTheme") || (consoleText.innerHTML == "usetheme")) {
            simpleCommand(["Type the number", "example: useTheme 2"]);
        }

        else if ((consoleText.innerHTML == "useTheme &nbsp;1") || (consoleText.innerHTML == "t1") || (consoleText.innerHTML == "usetheme &nbsp;1")) {
            useTheme(1);
            simpleCommand(["Switched to the default theme"]);
        }

        else if ((consoleText.innerHTML == "useTheme &nbsp;2") || (consoleText.innerHTML == "t2") || (consoleText.innerHTML == "usetheme &nbsp;2")) {
            useTheme(2);
            simpleCommand(["Switched to the cyberpunk theme"]);
        }

        else if ((consoleText.innerHTML == "useTheme &nbsp;3") || (consoleText.innerHTML == "t3") || (consoleText.innerHTML == "usetheme &nbsp;3")) {
            useTheme(3);
            simpleCommand(["Switched to the cold theme"]);
        }

        else if ((consoleText.innerHTML == "useTheme &nbsp;4") || (consoleText.innerHTML == "t4") || (consoleText.innerHTML == "usetheme &nbsp;4")) {
            useTheme(4);
            simpleCommand(["Switched to the black/white theme"]);
        }

        else if (consoleText.innerHTML == "ascii") {
            simpleCommand(messages.ascii);
        }

        else if (consoleText.innerHTML == "is &nbsp;anyone &nbsp;there?") {
            simpleCommand([`<img class="imgborderless" src="https://i.giphy.com/n3UBd63oVlQLC.webp">`]);
            useTheme(4);
        }

        else if (consoleText.innerHTML == "berserk") {
            const randomNumber = (Math.random() * (138 - 1) + 1).toFixed();
            simpleCommand([`<a href="https://img.coelhomarcus.com/bash/berserk/berserk%20(${randomNumber}).png" target="_blank"><img class="imgmanga" src="https://img.coelhomarcus.com/bash/berserk/berserk%20(${randomNumber}).png"></a>`]);
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
    p.innerHTML = `${username.innerText}${path.innerText} <span class="divider">${divider.innerText}</span><span class="command">${text}</span>`;
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


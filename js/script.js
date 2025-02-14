import messages from './modules/messages.js';
import useTheme from './modules/themes.js';

const input = document.querySelector("#text");
input.value = "";

const username = document.querySelector(".username");
const divider = document.querySelector(".divider");
const path = document.querySelector(".path");
const pathDefault = " ";
const answers = document.querySelector(".answers");

document.addEventListener("keydown", type);
function type(e) {

    if (document.activeElement !== input) {
        input.focus();
    }

    if (e.key == "Enter") {

        e.preventDefault();

        if (input.value == "clear" || input.value == "c" || input.value == "cls") {
            cleanCommand();
        }

        else if ((input.value == "help") || (input.value == "h")) {
            simpleCommand(messages.help);
        }

        else if ((input.value == "forfun") || (input.value == "ff")) {
            simpleCommand(messages.forfun);
        }

        else if ((input.value == "shortcut") || (input.value == "s")) {
            simpleCommand(messages.shortcut);
        }

        else if (input.value == "ee") {
            simpleCommand(messages.easteregg);
        }

        else if (input.value == "marcus") {
            simpleCommand(messages.marcus);
        }

        else if (input.value == "skills") {
            simpleCommand(messages.skills);
        }

        else if (input.value == "social") {
            simpleCommand(messages.social);
        }

        else if (input.value == "joke") {
            fetchCommand(messages.jokes, "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart");
        }

        else if (input.value == "btc") {
            fetchCommand(messages.btc, "https://blockchain.info/ticker");
        }

        else if (input.value == "dance") {
            fetchCommand(messages.dance, "https://api.waifu.pics/sfw/dance");
        }

        else if (input.value == "cat") {
            fetchCommand(messages.cat, "https://api.thecatapi.com/v1/images/search");
        }

        else if (input.value == "themes") {
            simpleCommand(messages.themes);
        }

        else if ((input.value == "useTheme ") || (input.value == "useTheme") || (input.value == "usetheme")) {
            simpleCommand(["Type the number", "example: useTheme 2"]);
        }

        else if ((input.value == "useTheme 1") || (input.value == "t1") || (input.value == "usetheme 1")) {
            useTheme(1);
            simpleCommand(["Switched to the default theme"]);
        }

        else if ((input.value == "useTheme 2") || (input.value == "t2") || (input.value == "usetheme 2")) {
            useTheme(2);
            simpleCommand(["Switched to the cyberpunk theme"]);
        }

        else if ((input.value == "useTheme 3") || (input.value == "t3") || (input.value == "usetheme 3")) {
            useTheme(3);
            simpleCommand(["Switched to the cold theme"]);
        }

        else if ((input.value == "useTheme 4") || (input.value == "t4") || (input.value == "usetheme 4")) {
            useTheme(4);
            simpleCommand(["Switched to the black/white theme"]);
        }

        else if (input.value == "ascii") {
            simpleCommand(messages.ascii);
        }

        else if (input.value == "is anyone there?") {
            simpleCommand([`<img class="imgborderless" src="https://i.giphy.com/n3UBd63oVlQLC.webp">`]);
            useTheme(4);
        }

        else if (input.value == "berserk") {
            const randomNumber = (Math.random() * (138 - 1) + 1).toFixed();
            simpleCommand([`<a href="https://img.coelhomarcus.com/bash/berserk/berserk%20(${randomNumber}).png" target="_blank"><img class="imgmanga" src="https://img.coelhomarcus.com/bash/berserk/berserk%20(${randomNumber}).png"></a>`]);
        }

        else {
            addUserLine(input.value);
            input.value = "";
            addMessages(["This command does not exist."]);
        }
    }
}

function addUserLine(text) {
    const p = document.createElement("p");
    p.innerHTML = `${username.innerText}${path.innerText} <span class="divider">${divider.innerText}</span><span class="command">${text}</span>`;
    answers.appendChild(p);
    window.scrollTo(0, document.body.scrollHeight);
}

function addConsoleLine(text) {
    const p = document.createElement("p");
    p.innerHTML = `${text}`;
    p.classList.add("typing");
    p.classList.add("console");
    answers.appendChild(p);
    window.scrollTo(0, document.body.scrollHeight);
}

function cleanCommand() {
    const tutorial = document.querySelector("p");
    tutorial.innerHTML = ``;
    answers.innerHTML = ``;
    input.value = "";
}

function simpleCommand(array) {
    addUserLine(input.value);
    input.value = "";
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
    addUserLine(input.value);
    input.value = "";
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


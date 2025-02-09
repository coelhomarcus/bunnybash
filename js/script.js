const consoleText = document.querySelector(".text");
const answers = document.querySelector(".answers");
let cmdHistory = [];

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
            const tutorial = document.querySelector("p");
            cmdHistory.push(consoleText.innerText);
            tutorial.innerHTML = ``;
            answers.innerHTML = ``;
            consoleText.innerText = "";
            return;
        }

        if (consoleText.innerText == "help") {
            addUserLine(consoleText.innerText);
            cmdHistory.push(consoleText.innerText);
            consoleText.innerText = "";
            async function showHelpMessages() {
                const messages = [
                    `<span class="title">**Commands**</span>`,
                    `<div class="info"><span class="command">whoami</span><span class="explain">Who is Marcus?</span></div>`,
                    `<div class="info"><span class="command">skills</span><span class="explain">My skills</span></div>`,
                    `<div class="info"><span class="command">social</span><span class="explain">My socials</span></div>`,
                    `<div class="info"><span class="command">clear</span><span class="explain">Clear terminal</span></div>`,
                    `<div class="info"><span class="command">history</span><span class="explain">Commands history</span></div>`,
                    `<div class="info"><span class="command">forfun</span><span class="explain">More commands</span></div>`,
                ];
                for (let i = 0; i < messages.length; i++) {
                    await new Promise(resolve => setTimeout(() => {
                        addConsoleLine(messages[i]);
                        resolve();
                    }, i * 10));
                }
            }
            showHelpMessages();
            return;
        }

        if (consoleText.innerText == "forfun") {
            addUserLine(consoleText.innerText);
            cmdHistory.push(consoleText.innerText);
            consoleText.innerText = "";
            async function showHelpMessages() {
                const messages = [
                    `<span class="title">**ForFun Commands**</span>`,
                    `<div class="info"><span class="command">chat</span><span class="explain">Chat online w/ HackChat</span></div>`,
                    `<div class="info"><span class="command">dog</span><span class="explain">Random dog image</span></div>`,
                    `<div class="info"><span class="command">dance</span><span class="explain">Random anime dance</span></div>`,
                    `<div class="info"><span class="command">btc</span><span class="explain">Get bitcoin price</span></div>`,
                    `<div class="info"><span class="command">steam</span><span class="explain">My steam profile</span></div>`,
                    `<div class="info"><span class="command">joke</span><span class="explain">Random jokes</span></div>`,
                ];
                for (let i = 0; i < messages.length; i++) {
                    await new Promise(resolve => setTimeout(() => {
                        addConsoleLine(messages[i]);
                        resolve();
                    }, i * 10));
                }
            }
            showHelpMessages();
            return;
        }

        if (consoleText.innerText == "whoami") {
            addUserLine(consoleText.innerText);
            cmdHistory.push(consoleText.innerText);
            consoleText.innerText = "";
            async function showHelpMessages() {
                const messages = [
                    "My name is Marcus, and I love everything related to technology, games, and manga.",
                    "I am currently studying Information Systems at UNIFESSPA",
                    "I am also focused on improving my knowledge in web development and English.",
                ];
                for (let i = 0; i < messages.length; i++) {
                    await new Promise(resolve => setTimeout(() => {
                        addConsoleLine(messages[i]);
                        resolve();
                    }, i * 10));
                }
            }
            showHelpMessages();
            return;
        }

        if (consoleText.innerText == "skills") {
            addUserLine(consoleText.innerText);
            cmdHistory.push(consoleText.innerText);
            consoleText.innerText = "";
            async function showHelpMessages() {
                const messages = [
                    "Natural Language: Portuguese (Native); English (Ongoing)",
                    "Programming Language: Python; C#; Java; Swift; JavaScript (Ongoing)",
                    "Typesetting Language: HTML; CSS",
                ];
                for (let i = 0; i < messages.length; i++) {
                    await new Promise(resolve => setTimeout(() => {
                        addConsoleLine(messages[i]);
                        resolve();
                    }, i * 10));
                }
            }
            showHelpMessages();
            return;
        }

        if (consoleText.innerText == "social") {
            addUserLine(consoleText.innerText);
            cmdHistory.push(consoleText.innerText);
            consoleText.innerText = "";
            async function showHelpMessages() {
                const messages = [
                    `clickable:`,
                    `<a class="social" href="https://github.com/coelhomarcus" target="_blank">GitHub</a>`,
                    `<a class="social" href="https://www.linkedin.com/feed/" target="_blank">Linkedin</a>`,
                ];
                for (let i = 0; i < messages.length; i++) {
                    await new Promise(resolve => setTimeout(() => {
                        addConsoleLine(messages[i]);
                        resolve();
                    }, i * 10));
                }
            }
            showHelpMessages();
            return;
        }

        if (consoleText.innerText == "history") {
            addUserLine(consoleText.innerText);
            consoleText.innerText = "";
            async function showHelpMessages() {
                for (let i = 0; i < cmdHistory.length; i++) {
                    await new Promise(resolve => setTimeout(() => {
                        addConsoleLine(cmdHistory[i]);
                        resolve();
                    }, i * 10));
                }
            }
            showHelpMessages();
            return;
        }

        if (consoleText.innerText == "dance") {
            addUserLine(consoleText.innerText);
            cmdHistory.push(consoleText.innerText);
            consoleText.innerText = "";
            async function showHelpMessages() {
                const reponseAPI = await fetch('https://api.waifu.pics/sfw/dance');
                const json = await reponseAPI.json();

                const messages = [
                    `<img class="imgdefault" src="${json.url}">`
                ];
                for (let i = 0; i < messages.length; i++) {
                    await new Promise(resolve => setTimeout(() => {
                        addConsoleLine(messages[i]);
                        resolve();
                    }, i * 10));
                }
            }
            showHelpMessages();
            return;
        }

        if (consoleText.innerText == "dog") {
            addUserLine(consoleText.innerText);
            cmdHistory.push(consoleText.innerText);
            consoleText.innerText = "";
            async function showHelpMessages() {
                const reponseAPI = await fetch('https://dog.ceo/api/breeds/image/random');
                const json = await reponseAPI.json();

                const messages = [
                    `<img class="imgdefault" src="${json.message}">`
                ];
                for (let i = 0; i < messages.length; i++) {
                    await new Promise(resolve => setTimeout(() => {
                        addConsoleLine(messages[i]);
                        resolve();
                    }, i * 10));
                }
            }
            showHelpMessages();
            return;
        }

        if (consoleText.innerText == "btc") {
            addUserLine(consoleText.innerText);
            cmdHistory.push(consoleText.innerText);
            consoleText.innerText = "";
            async function showHelpMessages() {
                const reponseAPI = await fetch('https://blockchain.info/ticker');
                const json = await reponseAPI.json();

                const messages = [
                    `bitcoin: $${json.USD.sell}`
                ];
                for (let i = 0; i < messages.length; i++) {
                    await new Promise(resolve => setTimeout(() => {
                        addConsoleLine(messages[i]);
                        resolve();
                    }, i * 10));
                }
            }
            showHelpMessages();
            return;
        }

        if (consoleText.innerText == "chat") {
            addUserLine(consoleText.innerText);
            cmdHistory.push(consoleText.innerText);
            consoleText.innerText = "";
            async function showHelpMessages() {
                const messages = [
                    `<iframe src="https://hack.chat/?marcusterminalchat"></iframe>`
                ];
                for (let i = 0; i < messages.length; i++) {
                    await new Promise(resolve => setTimeout(() => {
                        addConsoleLine(messages[i]);
                        resolve();
                    }, i * 10));
                }
            }
            showHelpMessages();
            return;
        }

        if (consoleText.innerText == "steam") {
            addUserLine(consoleText.innerText);
            cmdHistory.push(consoleText.innerText);
            consoleText.innerText = "";
            async function showHelpMessages() {
                const reponseAPI = await fetch('https://playerdb.co/api/player/steam/bakanull');
                const json = await reponseAPI.json();
                const messages = [
                    `<a class="social" href="${json.data.player.meta.profileurl}" target="_blank">${json.data.player.username} - click here!</a>`,
                    `<img src="${json.data.player.avatar}">`,
                ];
                for (let i = 0; i < messages.length; i++) {
                    await new Promise(resolve => setTimeout(() => {
                        addConsoleLine(messages[i]);
                        resolve();
                    }, i * 10));
                }
            }
            showHelpMessages();
            return;
        }

        if (consoleText.innerText == "joke") {
            addUserLine(consoleText.innerText);
            cmdHistory.push(consoleText.innerText);
            consoleText.innerText = "";
            async function showHelpMessages() {
                const reponseAPI = await fetch('https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart');
                const json = await reponseAPI.json();

                const messages = [
                    `${json.setup}`,
                    `${json.delivery}`
                ];
                for (let i = 0; i < messages.length; i++) {
                    await new Promise(resolve => setTimeout(() => {
                        addConsoleLine(messages[i]);
                        resolve();
                    }, i * 10));
                }
            }
            showHelpMessages();
            return;
        }

        addUserLine(consoleText.innerText);
        consoleText.innerText = "";
        setTimeout(function () {
            addConsoleLine("This command does not exist");
        }, 300);
        scrollToBottom();
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
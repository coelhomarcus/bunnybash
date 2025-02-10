const messages = {
    help: [
        `<span class="title">**Commands**</span>`,
        `<div class="info"><span class="command">whoami</span><span class="explain">Who is Marcus?</span></div>`,
        `<div class="info"><span class="command">skills</span><span class="explain">My skills</span></div>`,
        `<div class="info"><span class="command">social</span><span class="explain">My socials</span></div>`,
        `<div class="info"><span class="command">clear</span><span class="explain">Clear terminal</span></div>`,
        `<div class="info"><span class="command">history</span><span class="explain">Commands history</span></div>`,
        `<div class="info"><span class="command">forfun</span><span class="explain">More commands</span></div>`,
    ],
    forfun: [
        `<span class="title">**ForFun Commands**</span>`,
        `<div class="info"><span class="command">dog</span><span class="explain">Random dog image</span></div>`,
        `<div class="info"><span class="command">dance</span><span class="explain">Random anime dance</span></div>`,
        `<div class="info"><span class="command">btc</span><span class="explain">Get bitcoin price</span></div>`,
        `<div class="info"><span class="command">steam</span><span class="explain">My steam profile</span></div>`,
        `<div class="info"><span class="command">joke</span><span class="explain">Random jokes</span></div>`,
    ],
    whoami: [
        "My name is Marcus, and I love everything related to technology, games, and manga.",
        "I am currently studying Information Systems at UNIFESSPA",
        "I am also focused on improving my knowledge in web development and English.",
    ],
    skills: [
        "Natural Language: Portuguese (Native); English (Ongoing)",
        "Programming Language: Python; C#; Java; Swift; JavaScript (Ongoing)",
        "Typesetting Language: HTML; CSS",
    ],
    social: [
        `clickable:`,
        `<a class="social" href="https://github.com/coelhomarcus" target="_blank">GitHub</a>`,
        `<a class="social" href="https://www.linkedin.com/feed/" target="_blank">Linkedin</a>`,
    ],
    dance: ['<img class="imgdefault" src="${json.url}">'],
    dog: ['<img class="imgdefault" src="${json.message}">'],
    btc: ['bitcoin: $${json.USD.sell}'],
    steam: ['<a class="social" href="${json.data.player.meta.profileurl}" target="_blank">${json.data.player.username} - click here!</a>', '<img src="${json.data.player.avatar}">',],
    jokes: ["${json.setup}", "${json.delivery}"]
}

export default messages;
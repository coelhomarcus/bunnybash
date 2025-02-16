const messages = {
    help: [
        `<span class="title">**Commands**</span>`,
        `<div class="info"><span class="command">marcus</span><span class="explain">Who is Marcus?</span></div>`,
        `<div class="info"><span class="command">skills</span><span class="explain">My skills</span></div>`,
        `<div class="info"><span class="command">social</span><span class="explain">My social media</span></div>`,
        `<div class="info"><span class="command">themes</span><span class="explain">Change theme</span></div>`,
        `<div class="info"><span class="command">forfun</span><span class="explain">More commands</span></div>`,
        `<div class="info"><span class="command">shortcut</span><span class="explain">Command shortcuts</span></div>`,
        `<div class="info"><span class="command">clear</span><span class="explain">Clear terminal</span></div>`,
    ],
    forfun: [
        `<span class="title">**ForFun Commands**</span>`,
        `<div class="info"><span class="command">recos</span><span class="explain">My recommendations</span></div>`,
        `<div class="info"><span class="command">cat</span><span class="explain">Random cat image</span></div>`,
        `<div class="info"><span class="command">dance</span><span class="explain">Random anime dance</span></div>`,
        `<div class="info"><span class="command">btc</span><span class="explain">Get bitcoin price</span></div>`,
        `<div class="info"><span class="command">joke</span><span class="explain">Random jokes</span></div>`,
    ],
    shortcut: [
        `<span class="title">**Shortcuts**</span>`,
        `<div class="info"><span class="command">h</span><span class="explain">help</span></div>`,
        `<div class="info"><span class="command">ff</span><span class="explain">forfun</span></div>`,
        `<div class="info"><span class="command">t1</span><span class="explain">useTheme 1 (Replace 1 with theme number)</span></div>`,
        `<div class="info"><span class="command">s</span><span class="explain">shorcut</span></div>`,
        `<div class="info"><span class="command">c</span><span class="explain">clear</span></div>`,
    ],
    easteregg: [
        `<span class="title">**Easter Eggs Commands**</span>`,
        `<div class="info"><span class="command">ascii</span>`,
        `<div class="info"><span class="command">is anyone there?</span>`,
        `<div class="info"><span class="command">berserk</span>`,
    ],
    marcus: [
        "Hi, I'm <a class='social' href='https://github.com/coelhomarcus'>Marcus</a>, and I love everything related to technology, games, and manga.",
        "I am currently studying Information Systems at UNIFESSPA,",
        "and I am also focused on improving my knowledge of web development and English.",
    ],
    skills: [
        `<div class="skills"><span class="onlytext">Natural Language </span><span class="explain">Portuguese (Native); English (Ongoing)</span></div>`,
        `<div class="skills"><span class="onlytext">Programming Language </span><span class="explain">Python; C#; Java; Swift; JavaScript;</span></div>`,
        `<div class="skills"><span class="onlytext">Typesetting Language </span><span class="explain">HTML; CSS;</span></div>`,
        `<div class="skills"><span class="onlytext">Frameworks & Libraries </span><span class="explain">React (Ongoing);</span></div>`,

    ],
    social: [
        `<a class="social" href="https://github.com/coelhomarcus" target="_blank">GitHub</a>`,
        `<a class="social" href="https://www.linkedin.com/feed/" target="_blank">Linkedin</a>`,
    ],
    themes: [
        `<span class="title">**Commands**</span>`,
        `<div class="info"><span class="command">useTheme 0</span><span class="explain">default theme</span></div>`,
        `<div class="info"><span class="command">useTheme 1</span><span class="explain">old theme</span></div>`,
        `<div class="info"><span class="command">useTheme 2</span><span class="explain">cyberpunk theme</span></div>`,
        `<div class="info"><span class="command">useTheme 3</span><span class="explain">blue theme</span></div>`,
        `<div class="info"><span class="command">useTheme 4</span><span class="explain">black/white theme</span></div>`,
    ],
    dance: ['<img class="imgdefault" src="${json.url}">'],
    cat: ['<img class="imgdefault" src="${json[0].url}">'],
    btc: ['bitcoin: $${json.USD.sell}'],
    steam: ['<a class="social" href="${json.data.player.meta.profileurl}" target="_blank">${json.data.player.username} - click here!</a>', '<img src="${json.data.player.avatar}">',],
    jokes: ["${json.setup}", "${json.delivery}"],
    recos: [`<span class="title">**Recommendations**</span>`,
        `<div class="info"><span class="onlytext">mangas</span><span class="explain">Berserk, 20th Century Boys...</span></div>`,
        `<div class="info"><span class="onlytext">pc games</span><span class="explain">Cyberpunk 2077, Elden Ring, Dark Souls III</span></div>`,
        `<div class="info"><span class="onlytext">ps2 games</span><span class="explain">Silent Hill 2, Shadow of Memories</span></div>`,
        `<div class="info"><span class="onlytext">movies</span><span class="explain">Prisoners...</span></div>`,
        `<div class="info"><span class="onlytext">WIP</span></div>`,

    ],
    anyonethere: [`<img class="imgborderless" src="https://i.giphy.com/n3UBd63oVlQLC.webp">`],
}

export default messages;
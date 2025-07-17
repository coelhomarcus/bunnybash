const messages = {
    help: [
        `<span class="title">**Commands**</span>`,
        `<div class="info"><span class="command">marcus</span><span class="explain">Who is Marcus?</span></div>`,
        `<div class="info"><span class="command">skills</span><span class="explain">My skills</span></div>`,
        `<div class="info"><span class="command">social</span><span class="explain">My social media</span></div>`,
        `<div class="info"><span class="command">projects</span><span class="explain">My projects</span></div>`,
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
    ],
    marcus: [
        "Hi, I'm <a class='social' href='https://coelhomarcus.com' target='_blank'>Marcus</a>, and I love everything related to technology, games, and manga.",
        "I am currently studying Information Systems at UNIFESSPA,",
        "and I am also focused on improving my knowledge of web development and English.",
    ],
    skills: [
        `<div class="skills">
    <span class="onlytext">Natural Languages</span>
    <span class="explain">Portuguese (Native); English (Ongoing)</span>
    </div>`,
        `<div class="skills">
    <span class="onlytext">Frontend</span>
    <span class="explain">HTML; CSS; JavaScript; TypeScript; React; Vite; Next.js; Tailwind</span>
    </div>`,
        `<div class="skills">
    <span class="onlytext">Backend</span>
    <span class="explain">Node.js; Express; Go; Python; C#; Java; Swift</span>
    </div>`,
        `<div class="skills">
    <span class="onlytext">Databases</span>
    <span class="explain">PostgreSQL; MySQL; SQLite</span>
    </div>`,
    ],
    social: [
        `<div class="info"><span class="command">github</span><span class="explain"><a class="social" href="https://github.com/coelhomarcus" target="_blank">github.com/coelhomarcus</a></span></div>`,
        `<div class="info"><span class="command">linkedin</span><span class="explain"><a class="social" href="https://www.linkedin.com/in/coelhomarcus/" target="_blank">linkedin.com/in/coelhomarcus</a></span></div>`,
        `<div class="info"><span class="command">itchio</span><span class="explain"><a class="social" href="https://coelhomarcus.itch.io/" target="_blank">coelhomarcus.itch.io/</a></span></div>`,
        `<div class="info"><span class="explain">discord</span><span class="explain">@coelhomarcus</span></div>`,
    ],
    projects: [
        `<div class="info"><span class="command">portfolio & blog</span><span class="explain"><a class="social" href="https://coelhomarcus.com" target="_blank">coelhomarcus.com</a></span></div>`,
        `<div class="info"><span class="command">cafuntalk</span><span class="explain"><a class="social" href="https://cafuntalk.com" target="_blank">cafuntalk.com</a></span></div>`,
        `<div class="info"><span class="command">bunnybash</span><span class="explain"><a class="social" href="https://coelhomarcus.github.io/bunnybash/" target="_blank">coelhomarcus.github.io/bunnybash</a></span></div>`,
        `<div class="info"><span class="command">Lune VNs</span><span class="explain"><a class="social" href="https://maahlune.github.io/vn/" target="_blank">maahlune.github.io/vn</a></span></div>`,
        `<div class="info"><span class="command">blob</span><span class="explain"><a class="social" href=https://blob-temp.vercel.app/" target="_blank">blob-temp.vercel.app</a></span></div>`,
        `<div class="info"><span class="command">catype</span><span class="explain"><a class="social" href="https://coelhomarcus.github.io/catype/" target="_blank">coelhomarcus.github.io/catype</a></span></div>`,
        `<div class="info"><span class="command">all projects</span><span class="explain"><a class="social" href="https://coelhomarcus.com/projects" target="_blank">coelhomarcus.com/projects</a></span></div>`,
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
    btc: ["bitcoin: $${json.USD.sell}"],
    jokes: ["${json.setup}", "${json.delivery}"],
    recos: [
        `<span class="title">**Recommendations**</span>`,
        `<div class="info"><span class="onlytext">mangas</span><span class="explain">Berserk, 20th Century Boys...</span></div>`,
        `<div class="info"><span class="onlytext">pc games</span><span class="explain">Cyberpunk 2077, Elden Ring, Dark Souls III</span></div>`,
        `<div class="info"><span class="onlytext">ps2 games</span><span class="explain">Silent Hill 2, Shadow of Memories</span></div>`,
        `<div class="info"><span class="onlytext">movies</span><span class="explain">Prisoners...</span></div>`,
        `<div class="info"><span class="onlytext">WIP</span></div>`,
    ],
    anyonethere: [`<img class="imgborderless" src="https://i.giphy.com/n3UBd63oVlQLC.webp">`],
};

export default messages;

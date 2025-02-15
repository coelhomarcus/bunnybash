let background, textConsole, textSocial, textHelpTitle, textCommandColor, textAnswerColor, textExplainColor, textDividerColor, textUsernameColor;

export default function useTheme(n) {

    if (n == 0) {
        background = "#1e1e2e";
        textConsole = "#cdd6f4";
        textSocial = "#89b4fa";
        textHelpTitle = "#fab387";
        textCommandColor = "#f9e2af";
        textAnswerColor = "#a6e3a1";
        textExplainColor = "#f38ba8";
        textDividerColor = "#ffe5d9";
        textUsernameColor = "#98c379";
    }

    if (n == 1) {
        background = "#211d1b";
        textConsole = "#98c379";
        textSocial = "#F95";
        textHelpTitle = "#e5c07b";
        textCommandColor = "#61afef";
        textAnswerColor = "#ffe5d9";
        textExplainColor = "#808080";
        textDividerColor = "#ffe5d9";
        textUsernameColor = "#98c379";
    }

    if (n == 2) {
        background = "#0f0f0f";
        textConsole = "#00ff99";
        textSocial = "#ff007f";
        textHelpTitle = "#ff007f";
        textCommandColor = "#f1c40f";
        textAnswerColor = "#f1f1f1";
        textExplainColor = "#ff00ff";
        textDividerColor = "#ff007f";
        textUsernameColor = "#00ff99";
    }

    if (n == 3) {
        background = "#282c34";
        textConsole = "#56b6c2";
        textSocial = "#ff79c6";
        textHelpTitle = "#f1fa8c";
        textCommandColor = "#8be9fd";
        textAnswerColor = "#f8f8f2";
        textExplainColor = "#bd93f9";
        textDividerColor = "#44475a";
        textUsernameColor = "#56b6c2";
    }

    if (n == 4) {
        background = "#000";
        textConsole = "#fff";
        textSocial = "grey";
        textHelpTitle = "#fff";
        textCommandColor = "#fff";
        textAnswerColor = "#fff";
        textExplainColor = "#fff";
        textDividerColor = "#fff";
        textUsernameColor = "#fff";
    }

    if (!isNaN(n)) {
        document.body.style.background = background;
        document.documentElement.style.setProperty('--main-background-color', background);
        document.documentElement.style.setProperty('--main-console-color', textConsole);
        document.documentElement.style.setProperty('--main-social-color', textSocial);
        document.documentElement.style.setProperty('--main-helptitle-color', textHelpTitle);
        document.documentElement.style.setProperty('--main-command-color', textCommandColor);
        document.documentElement.style.setProperty('--main-answer-color', textAnswerColor);
        document.documentElement.style.setProperty('--main-explain-color', textExplainColor);
        document.documentElement.style.setProperty('--main-divider-color', textDividerColor);
        document.documentElement.style.setProperty('--main-username-color', textUsernameColor);
    }
}
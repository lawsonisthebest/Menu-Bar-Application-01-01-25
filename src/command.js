const { ipcRenderer } = require('electron');
const { app } = require('electron');

const resetButton = document.getElementById('reset');
const quitButton = document.getElementById('exit');
const response = document.getElementById('response');

window.addEventListener('keydown', (e) => {
    const appName = document.getElementById('appName').value;
    if(e.key == "Enter"){
        if(appName.includes("-u ")){
            res = appName.replace("-u ", "");
            window.open("https://www." + res)
            response.innerHTML = "Opening url: " + res;
        }
        if(appName.includes("-s ")){
            res = appName.replace("-s ", "");
            window.open('http://google.com/search?q='+res);
            response.innerHTML = "Searching for: " + res;
        }
        if(appName.includes("-a ")){
            res = appName.replace("-a ", "");
            ipcRenderer.send('open-launchpad-app', res);
        }

        if(!appName.includes("-a ") && !appName.includes("-u ") && !appName.includes("-s ")){
            response.innerHTML = "List of commands:\n-a: Open app\n-s: Search\n-u: Open Url";
        }

    }
});

resetButton.addEventListener("click", () => {
    const appName = document.getElementById('appName').value = '';
    response.textContent = '';
});

ipcRenderer.on('open-app-response', (event, message) => {
    response.textContent = message;
});

quitButton.addEventListener("click", ()=>{
    ipcRenderer.send('quit-app');
});
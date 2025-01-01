const commandsPageBtn = document.querySelector(".commandsPage");
const calculatorBtn = document.querySelector(".calculatorPage");
const alarmPageBtn = document.querySelector(".alarmPage");

const commandsPage = document.querySelector('.commands');
const calculatorPage = document.querySelector('.calculator');
const alarmPage = document.querySelector('.alarm');

const playFooterBtn = document.getElementById("start-pause");
const stopFooterBtn = document.getElementById("stop");
const resetFooterBtn = document.getElementById("reset");

commandsPage.style.display = "none";
    alarmPage.style.display = "none";
    calculatorPage.style.display = "inherit";
    playFooterBtn.style.display = "none";
    stopFooterBtn.style.display = "none";
    resetFooterBtn.style.display = "none";

commandsPageBtn.addEventListener("click",()=>{
    commandsPage.style.display = "inherit";
    calculatorPage.style.display = "none";
    alarmPage.style.display = "none";
    playFooterBtn.style.display = "none";
    stopFooterBtn.style.display = "none";
    resetFooterBtn.style.display = "flex";
});

alarmPageBtn.addEventListener("click",()=>{
    commandsPage.style.display = "none";
    calculatorPage.style.display = "none";
    alarmPage.style.display = "inherit";
    playFooterBtn.style.display = "flex";
    stopFooterBtn.style.display = "flex";
    resetFooterBtn.style.display = "none";
});
 calculatorBtn.addEventListener("click",()=>{
    commandsPage.style.display = "none";
    alarmPage.style.display = "none";
    calculatorPage.style.display = "inherit";
    playFooterBtn.style.display = "none";
    stopFooterBtn.style.display = "none";
    resetFooterBtn.style.display = "none";
});
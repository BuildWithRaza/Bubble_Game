console.log('Script Running')
let numbers = document.querySelector(".numbers")
let targetvalue = document.querySelector(".targetvalue")
let scorevalue = document.querySelector(".scorevalue")
let finalscore = document.querySelector(".finalscore")
let highscore = document.querySelector(".highscore")
let start = document.querySelector("#start")
let game = document.querySelector(".game")
let timer = document.querySelector(".timevalue")


function randomNum() {
    return Math.ceil(1 + Math.random() * (9 - 1))
}


start.addEventListener("click", () => {
    
    perform()
    targetvalue.innerHTML = randomNum();
    timer.innerText = 10;
    const interval = setInterval(() => {
        timer.innerText = Number(timer.innerText) - 1
    }, 1000)
    setTimeout(() => {
        document.querySelector(".game h1").classList.remove("hide")
        start.innerText = "Restart"
        game.style.display = "flex"
        numbers.style.display = "none"
        finalscore.innerText = scorevalue.innerText;
        if (Number(finalscore.innerText) > Number(highscore.innerText)) {
            highscore.innerText = finalscore.innerText;
        }
        scorevalue.innerText = 0;
        targetvalue.innerText = 0;
        clearInterval(interval)
    }, 10000);

}
)

function perform() {
   
        game.style.display = "none"
        numbers.innerHTML = ""
        numbers.style.display = "flex"
        for (let i = 0; i < 90; i++) {
            numbers.innerHTML = numbers.innerHTML + `<p>${randomNum()}</p>`
        }
        let values = document.querySelectorAll(".numbers p");
        Array.from(values).forEach((e) => {
            e.addEventListener("click", () => {
                console.log(e.innerHTML)
                if (e.innerHTML == targetvalue.innerHTML) {
                    targetvalue.innerText = randomNum();
                    scorevalue.innerText = Number(scorevalue.innerText) + 10
                    console.log("target")
                    perform()
                }
                else {
                    console.log("Not target")
                    scorevalue.innerHTML = Number(scorevalue.innerHTML) - 5
                    perform()
                }
            }
            )
        })
}

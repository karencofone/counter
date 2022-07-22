let count = 0

const value = document.querySelector("#value")
const buttons = document.querySelectorAll(".btn")

buttons.forEach(function (btn) {
    btn.addEventListener("click", function(eventObj) {

        const styleBtn = eventObj.currentTarget.classList

        if(styleBtn.contains("decrease")){
            count--
        }
        else if(styleBtn.contains("increase")){
            count++
        }
        else if(styleBtn.contains("reset")){
            count = 0
        }

        value.textContent = count

        if(count > 0){
            value.style.color = "rgb(82, 113, 81)"
        }
        else if(count < 0){
            value.style.color = "rgb(211, 74, 74)"
        }
        else if(count == 0){
            value.style.color = "rgb(222, 197, 222)"
        }
    })
})
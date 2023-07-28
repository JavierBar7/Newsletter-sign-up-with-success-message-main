const body = document.body
const container = document.getElementById("container")
const form = document.getElementById("form")
const title = document.getElementById("title")
const login = document.getElementById("login")
const form_text = document.getElementById("form_text")
const form_error = document.getElementById("form_error")
const img = document.getElementById("img")
const validated_box = document.getElementById("validated_box")
const validated_icon = document.getElementById("validated_icon")
const validated_title = document.getElementById("validated_title")
const validated_text = document.getElementById("validated_text")
const dismiss = document.getElementById("dismiss")


login.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form_text.value.includes("@")){
        form_text.classList.add("error")
        form_error.style.visibility = 'visible'
    }else {
        form_error.style.visibility = 'hidden'
        validated_text.innerHTML = "A confirmation email has been sent to <strong>" + form_text.value + "</strong>. Please open it and click the button inside to confirm your subscription."
        form.style.filter = "opacity(0%)"
        img.style.filter = "opacity(0%)"
        setTimeout(function(){
            form.style.display = "none"
            img.style.display = "none"
            container.style.transform = "translate(-50%, -50%) scale(52%, 80%)"
            container.style.borderRadius = "70px"
            setTimeout(function(){
                container.style.filter = "opacity(0%)"
                setTimeout(function(){
                    container.style.display = "none"
                }, 250)
            }, 300)
        }, 250)
    }
    }
)

dismiss.addEventListener("click", function(){
    body.classList.add("end")
    setTimeout(function(){
        validated_icon.style.display = "none"
        validated_title.style.display = "none"
        validated_text.style.display = "none"
        dismiss.style.display = "none"
        validated_box.style.transform = "translate(-50%, -50%) scale(0%)"
        setTimeout(function(){
            validated_box.style.display = "none"
        }, 300)
    }, 250)
})
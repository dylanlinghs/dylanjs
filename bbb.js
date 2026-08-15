//5.this with an evnt listener

const button = document.getElementById("button")

if (button) {
    button.addEventListener("click", function() {
        console.log("the button was clicked!")
        console.log("this =",this)

        this.textContent = "Clicked!"
    })
}
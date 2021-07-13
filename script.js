// Get buttons
var buttons = document.querySelectorAll("button");
var body = document.querySelector("body");

// Add event listener

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        var color = this.textContent.toLowerCase();
        body.className = color;
    });
})

// By: https://codewithkevan.com
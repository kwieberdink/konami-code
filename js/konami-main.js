"use strict";
// JQuery Method:
// let userCode = "";
// $(document).keyup(function(event){
//     userCode = `${userCode + ((event.key).toString())} `;
//     if (userCode === "ArrowUp ArrowUp ArrowDown ArrowDown ArrowLeft ArrowRight ArrowLeft ArrowRight b a Enter ") {
//         // alert(`Cheat enabled!`);
//         $("body").css("background-color", "black");
//         $("body").css("color", "red");
//         $("h1").html("CHEAT MODE ENABLED");
//     }
// });

// Vanilla JS Method
// Created an array of keys required for konami code
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

// konamiCodeIndex keeps track of user's key presses
let konamiCodeIndex = 0;
// Calling resetTimer globally for later use
let resetTimer;

// When the html page content loads do this:
document.addEventListener('DOMContentLoaded',function() {
    // when a particular key is pressed do this:
    document.addEventListener('keydown', function(event) {
        // if the event key equals the next key inputs of the konami code sequence
        if(event.key === konamiCode[konamiCodeIndex]) {
            // If the key released matches the next key in the Konami Code sequence, the Index variable is incremented by 1 to move on to the next key in the sequence
            konamiCodeIndex++;
            // if the Index varialbe has reached the length of the Konami Code sequence, it means that the user has entered the correct code sequence.
            if (konamiCodeIndex === konamiCode.length) {
                // Changes background color to red
                document.body.style.backgroundColor = 'red';
                // Changes text to white
                document.body.style.color = 'white';
                // Resets the Index variable back to 0 to start a new sequence and clears the reset timer
                konamiCodeIndex = 0;
                clearTimeout(resetTimer);
                resetTimer = null;
            }
        } else {
            // If the user enters the incorrect key or the sequence is interrupted, the Index variable is reset to 0 and the reset timer is cleared to start over
            konamiCodeIndex = 0;
            clearTimeout(resetTimer);
            resetTimer = null;
        }
        // Starts the timer to reset the key presses after a certain amount of time
        if (!resetTimer) {
            resetTimer = setTimeout(function() {
                konamiCodeIndex = 0;
                resetTimer = null;
            }, 5000);
        }
    })
})

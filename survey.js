const ul_1 = document.querySelector(".option1");
const ul_2 = document.querySelector(".option2");
const ul_3 = document.querySelector(".option3");
const ul_4 = document.querySelector(".option4");

const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");
const q4 = document.querySelector(".q4");

const survey = document.querySelector(".survey");
const result = document.querySelector(".result");

let answer1 = null;
let answer2 = null;
let answer3 = null;
let answer4 = null;

// First Question
ul_1.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT") {
        answer1 = e.target.value;
    }
});
// Second
ul_2.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT") {
        answer2 = e.target.value;
    }
});
//Third
ul_3.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT") {
        if (e.target.value === "yes") {
            answer3 = true;
        } else {
            answer3 = false;
        }
    }
});
// Fourth
ul_4.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT") {
        answer4 = e.target.value;
    }
});


//from here on out, we will try to use jquery so i can learn it.
$(document).ready(function() {
    $("#submit").on('click', function() {
        getResult();
    });
});

function getResult()
{
    if(!(answer1 == null || answer2 == null || answer3 == null || answer4 == null)) {
        if(answer1 === "gaming"){
            if(answer4 === "high"){
                $('#distro').text("Windows 11 - since the bloat won't bottleneck you too much, and it has higher gaming support than Linux.")
            }
            else {
                $('#distro').text("Bazzite - it's a gaming focused distro that is very user friendly, and should run well on medium performance PCs.")
            }
        }
        else if (answer1 === "programming"){
            if(answer2 === "oob"){
                $('#distro').text("Ubuntu - it's a very user friendly distro with good support for programming, and is very easy to set up.")
            }
            else {
                $('#distro').text("Arch Linux - it's a very customizable distro that is great for programming, but it requires a lot of setup.")
            }
        }
        else if (answer1 === "general"){
            if(answer3 === true){
                $('#distro').text("Fedora - it's a very user friendly distro that is great for general use, and has good support for the command line.")
            }
            else {
                $('#distro').text("Linux Mint - it's a very user friendly distro that is great for general use, and has a very simple interface.")
            }
        }

    }
    else { 
        alert("Please answer all questions before submitting the survey.");
    }
}




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

// First Question
ul_1.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT") {
        let answer1 = e.target.value;
        alert("answer 1: " + answer1);
    }
});
// Second
ul_2.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT") {
        let answer2 = e.target.value;
        alert("answer 2: " + answer2);
    }
});
//Third
ul_3.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT") {
        let answer3 = e.target.value;
        alert("answer 3: " + answer3);
    }
});
//Fourth
ul_4.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT") {
        let answer4 = e.target.value;
        alert("answer 4: " + answer4);
    }
});


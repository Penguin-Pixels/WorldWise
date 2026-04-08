
const API_URL = "https://worldwise-7chh.onrender.com";

function loadScenario() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            document.getElementById("question").innerText = data.question;

            const optionsDiv = document.getElementById("options");
            optionsDiv.innerHTML = "";

            data.options.forEach((option, index) => {
                const btn = document.createElement("button");
                btn.innerText = option;
                btn.onclick = () => checkAnswer(index, data.answer, data.explanation);
                optionsDiv.appendChild(btn);
            });
        });
}

function checkAnswer(selected, correct, explanation) {
    const feedback = document.getElementById("feedback");

    if (selected === correct) {
        feedback.innerText = "Correct! " + explanation;
        feedback.style.color = "green";
    } else {
        feedback.innerText = "Incorrect. " + explanation;
        feedback.style.color = "red";
    }
}

loadScenario();

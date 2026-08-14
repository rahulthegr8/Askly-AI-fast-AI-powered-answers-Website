const askBtn = document.getElementById("askBtn");
const questionInput = document.getElementById("question");
const answerBox = document.getElementById("answer");

async function askAI() {
    const question = questionInput.value.trim();

    if (!question) {
        answerBox.textContent = "Please enter a question.";
        return;
    }

    askBtn.disabled = true;
    askBtn.innerHTML = "Thinking...";

    answerBox.textContent = "AI is thinking...";

    try {
        const response = await fetch(
            `http://127.0.0.1:8000/ask?question=${encodeURIComponent(question)}`
        );

        if (!response.ok) {
            throw new Error("Backend error");
        }

        const data = await response.json();

        // IMPORTANT:
        // textContent use karenge, innerHTML nahi.
        // Isse AI ka HTML code webpage ko damage nahi karega.
        answerBox.textContent = data.answer;

    } catch (error) {

        console.error(error);

        answerBox.textContent =
            "Something went wrong. Please make sure the backend is running.";

    } finally {

        askBtn.disabled = false;
        askBtn.innerHTML = 'Ask AI <i class="fa-solid fa-arrow-up"></i>';

    }
}


askBtn.addEventListener("click", askAI);


// Enter press karke bhi search
questionInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        askAI();
    }

});

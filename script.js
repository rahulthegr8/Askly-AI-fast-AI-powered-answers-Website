const askBtn = document.getElementById("askBtn");
const questionInput = document.getElementById("question");
const answerBox = document.getElementById("answer");

askBtn.addEventListener("click", async () => {
  const question = questionInput.value.trim();

  if (!question) {
    answerBox.innerHTML = "Please enter a question.";
    return;
  }

  answerBox.innerHTML = "Thinking...";

  try {
    const response = await fetch(
      `http://127.0.0.1:8000/ask?question=${encodeURIComponent(question)}`
    );

    const data = await response.json();

    answerBox.innerHTML = data.answer;
  } catch (error) {
    answerBox.innerHTML = "Something went wrong. Please try again.";
    console.error(error);
  }
});
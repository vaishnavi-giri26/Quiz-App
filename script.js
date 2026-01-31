const questions = [
    {
      question: "What is the capital of India?",
      options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
      answer: "Delhi"
    },
    {
      question: "Which language runs in the browser?",
      options: ["Python", "C", "JavaScript", "Java"],
      answer: "JavaScript"
    },{
      question: "Which tag is used for paragraphs in HTML?",
      options: ["<div>", "<p>", "<span>", "<h1>"],
      answer: "<p>"
    }
  ];
  
  let currentIndex = 0;
  let score = 0;
  
function loadQuestion() {
    const current = questions[currentIndex];
    document.getElementById("question").textContent = current.question;
    
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
  
    current.options.forEach(opt => {
      const btn = document.createElement("div");
      btn.className = "option";
      btn.textContent = opt;
      btn.onclick = () => {
        if (opt === current.answer) score++;
        nextQuestion();
      };
      optionsDiv.appendChild(btn);
    });
  }function nextQuestion() {
    currentIndex++;
    if (currentIndex < questions.length) {
      loadQuestion();
    } else {
      document.getElementById("quizBox").innerHTML =
        `<h2>Quiz Completed</h2><p>Your Score: ${score}/${questions.length}</p>`;
    }
  }
  
  loadQuestion();
  

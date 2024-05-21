document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("start-button");
    const stopButton = document.getElementById("stop-button");
    const speechOutput = document.getElementById("speech-output");
    const questionContainer = document.getElementById("question-container");

    // Define your interview questions here
    const questions = [
        "Why do you want to study in the US?",
        "Why USA, why not another country?",
        "Why did you select this university?",
        "How many universities did you apply to?",
        "Did you take the SAT?",
        "Did you take IELTS or TOEFL?",
        "Who is sponsoring your trip?",
        "How will your expenses be covered?",
        "Where will you be staying?",
        "Have you visited the US before?",
        "Have you booked your tickets?",
        "Do you have any friends, family, or relatives in the US?",
        "How can you assure us that you will return to your home country?",
        "Do you have a scholarship?",
        "Tell me about your academic background.",
        "What will your degree specialization be?",
        "What will be your major?",
        "What are your future career plans?",
        "Oh really? Why cybersecurity?",
        "Why not do cybersecurity for your undergraduate instead?",
        "Why don’t you want to do this course in your country?",
        "What are your WAEC grades like?",
        "What do you know about American culture?",
        "Why should you be given a visa?",
        "What will you do if your visa is rejected?",
        "In what city is Winthrop university located?",
        "Mention the names of your professors at winthrop university",
        "Will you come back home during vacations or holidays?",
        "How do you intend to manage health care and other expenses you will incur?",
        "What is your sponsor’s monthly income?",
        "What is your sponsor’s annual income?",
        "What is your university’s yearly expenses?",
        "Do you have a statement from the sponsor on a bank letterhead?",
        "Do you have a financial affidavit from the US-based sponsor?",
        
        // Add more questions as needed
    ];
    let synth = window.speechSynthesis;
    let isInterviewRunning = false;
    let interviewInterval;

    function speak(text) {
        // Create a new speech synthesis utterance
        let utterance = new SpeechSynthesisUtterance(text);
        // Speak the text
        synth.speak(utterance);
    }

    function displayQuestion() {
        // Select a random question
        const randomIndex = Math.floor(Math.random() * questions.length);
        const question = questions[randomIndex];
        speechOutput.textContent = question;
        speak(question);
    }

    function startInterview() {
        isInterviewRunning = true;
        startButton.style.display = "none";
        stopButton.style.display = "inline-block";
        interviewInterval = setInterval(displayQuestion, 15000); // Display a question every 20 seconds
        displayQuestion(); // Display the first question immediately
    }

    function stopInterview() {
        isInterviewRunning = false;
        clearInterval(interviewInterval);
        stopButton.style.display = "none";
        startButton.style.display = "inline-block";
    }

    startButton.addEventListener("click", startInterview);
    stopButton.addEventListener("click", stopInterview);
});

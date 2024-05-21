document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("start-button");
    const stopButton = document.getElementById("stop-button");
    const speechOutput = document.getElementById("speech-output");
    const questionContainer = document.getElementById("question-container");

    // Define your interview questions here
    const questions = [
        "Question: What is your purpose for travel? Answer, Answer, Answer: I intend to travel to the United States to pursue higher education at Winthrop University in Rock Hill, South Carolina. I have been admitted to the computer science / cybersecurity / computer and information science program and plan to commence studies in the upcoming fall term.",
        "Question: Why do you want to study in the U.S.? Answer, Answer, Answer 1: The U.S. offers a flexible education system, which I believe will help me excel in my future career. As a student in the U.S., I can select from a wide range of programs to explore various fields. I will get the opportunity to experiment with other courses to take a peek at what they consist of, which will help broaden my knowledge. Additionally, I prefer a balance between practical and theoretical teaching, but the Nigerian school system is more theory-oriented. In high school, I looked forward to hands-on labs, projects, and critical thinking activities, which are lacking in Nigeria’s theory-focused system. The U.S. education system provides this balance, making it the ideal environment for me to develop my career fully. OR: Answer, Answer, Answer 2: I have always wanted to attend Winthrop since high school. My sponsor’s daughter attended and gave excellent reviews. Despite its ups and downs, the overall experience is highly rewarding. Winthrop boasts an honored and experienced faculty, impressive rankings, and achievements, such as being one of the top 5 public schools in South Carolina. It’s a school worth attending and it happens to be located in a country that makes the schooling experience much better because the U.S. is an advanced country, providing access to cutting-edge technology and lab equipment. This exposure will be invaluable when I start working on bringing advanced innovations to Nigeria.",
        "Question: Why the U.S.A, why not another country?  Answer,  Answer, Answer: First of all, Winthrop University, which I have always wanted to attend, is located in the U.S. U.S. schools have vibrant campus life with numerous clubs and organizations that broaden students' knowledge and experiences. My education will benefit not just me and my family, but also those around me and Nigeria as a whole. By the time I complete my undergraduate studies and return to Nigeria, I will have gained valuable knowledge to get secure a high-paying job, start companies, help transform lives, and establish non-profit organizations. Studying in the U.S. will also give me an edge in the Nigerian job market, boosting my career prospects. I will be prioritized over applicants who studied locally due to my broader knowledge base. My elder siblings, who studied in Nigeria, faced difficulties before they could secure their current high-paying jobs and they have advised me to study abroad based on their experience. Additionally, the U.S. offers excellent support for international students. I experienced this support firsthand from Winthrop officials during my admission process. Despite being thousands of miles away, their prompt and helpful email communication made me feel as though I had known them for years, and Winthrop already feels like home.",
        "Question: Have you visited the U.S. before? Answer, Answer, Answer: No I haven’t. I have never had the chance to visit. This will be my first visit.",
        "Question: Have you booked your tickets? Answer, Answer, Answer: {Answer will depend on the situation at that time}",
        "Question: Do you have any friends, family, or relatives in the U.S.? Answer, Answer, Answer: I have a friend in Minnesota who is studying medicine.",
        "Question: What do you know about American culture? Answer, Answer, Answer: One of America's defining features is its emphasis on freedom of speech and human rights expression. Unlike Nigerian schools, American students are encouraged to voice their opinions, suggestions, and criticisms to their professors openly. Additionally, American culture is known for its love of sports and recreation, particularly American football and basketball, which has piqued my interest. What excites me most about studying in America is the culture of competition. Whether in schools, workplaces, organizations, or politics, competition is always prevalent. I look forward to competing with classmates in hackathons and other events, which will enhance the educational experience and make it more enjoyable.",
        "Question: Why should you be given a visa? Answer, Answer, Answer: Granting me this visa will provide a great opportunity to learn from top professors, acquire valuable knowledge, and have a wonderful college experience as I will be attending my dream college. This, in turn, will help in the development of my great country, Nigeria. I pledge to be on my best behavior while studying in the U.S. and to not break any laws, rules, and regulations. I will stay in school and complete my studies before returning to work in the Nigerian FINTECH industry as an ethical hacker. I believe the U.S. offers high-quality education and excellent academic opportunities in my chosen field of study. Its education system utilizes advanced methods and technology to bring out the best in students who are committed to their success and I am determined to excel in my chosen career and contribute significantly to the Nigerian FINTECH industry.",
        "Question: What will you do if your visa is rejected? Answer, Answer, Answer 1: It has long been my wish to study at Winthrop University, but I will respect the embassy's decision. If needed, I will ensure to prepare all necessary documents and information for my next application to make the most of a second chance. Education in the U.S. is excellent, but time is more precious than any other commodity. If my second application is also rejected, I won't waste time trying again. Instead, I will pursue my backup plans for my life. OR: Answer 2: I will consider it a blessing in disguise. I will re-analyze my application, identify where I went wrong, and try again. Education in the U.S. is excellent, but time is more precious than any other commodity. If my second application is also rejected, I won't waste time trying again. Instead, I will pursue my backup plans for my life. OR: Answer 3: Rejecting my visa will undoubtedly have a significant impact on my life, as it will change my life’s trajectory. My supporters, friends, and professors at Winthrop University who have eagerly anticipated my arrival will also be disappointed. Education in the U.S. is excellent, but time is more precious than any other commodity. If my second application is also rejected, I won't waste time trying again. Instead, I will pursue my backup plans for my life.",
        "Question: What are your backup plans? Answer, Answer, Answer: If my visa is rejected, I will apply to a Nigerian university to study computer science / cybersecurity / computer and information science while also enrolling in a technical school for practical training in solar and renewable energy. Solar energy is still emerging in Nigeria and Africa, and being a computer science / cybersecurity / computer and information science graduate, combined with skills in solar and renewable energy, will make me unstoppable. I will have an excellent career, and my competition will be intimidated. When they hear the name "Wisdom Ona," they will shudder (smiles).",
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

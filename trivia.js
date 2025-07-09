const questions = [//Liste des questions du quiz, chaque question a des options de réponse et une réponse correcte
  {
      question: "What sport is known as the 'king of sports'?",
      options: ["Football", "Basketball", "Tennis", "Baseball"],
      answer: "Football"
  },
  {
      question: "Which NBA player is known as 'The Black Mamba'?",
      options: ["LeBron James", "Kobe Bryant", "Michael Jordan", "Stephen Curry"],
      answer: "Kobe Bryant"
  },
  {
  question: "Which NFL team has won the most Super Bowls?",
  options: ["New England Patriots", "Green Bay Packers", "New York Giants", "Dallas Cowboys"],
  answer: "New England Patriots"
},
{
  question : "Who is the all-time leading scorer in the history of the English Premier League?",
  options : ["Alan Shearer","Wayne Rooney","Andrew Cole","Sergio Aguero"],
  answer : "Alan Shearer"
},
];

let currentQuestionIndex = 0;  // Index de la question actuelle

const questionElement = document.getElementById('question');  // Références aux éléments HTML pour afficher la question, les options et le résultat
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');

function showQuestion() {  // Fonction pour afficher la question actuelle
  const currentQuestion = questions[currentQuestionIndex];  // Obtenir la question actuelle à partir de la liste des questions
  questionElement.textContent = currentQuestion.question; // Mettre à jour le texte de l'élément question
  optionsElement.innerHTML = "";  // Vider les options précédentes
  currentQuestion.options.forEach((option, index) => {  // Créer un bouton pour chaque option de réponse
      const button = document.createElement('button'); 
      button.textContent = option; 
      button.classList.add('option');
      button.addEventListener('click', () => selectOption(option)); // Ajouter un événement de clic pour chaque bouton d'option
      optionsElement.appendChild(button); // Ajouter le bouton à l'élément options
  });
}

function selectOption(option) {  // Fonction pour gérer la sélection d'une option
  const currentQuestion = questions[currentQuestionIndex];  // Obtenir la question actuelle
  if (option === currentQuestion.answer) {  // Vérifier si l'option sélectionnée est correcte
      resultElement.textContent = "Correct!"; 
      currentQuestionIndex++; // Passer à la question suivante
      if (currentQuestionIndex < questions.length) { // Si toutes les questions n'ont pas encore été répondues, afficher la question suivante
          showQuestion();
      }
  } else {
      resultElement.textContent = "Incorrect! Try again.";
      currentQuestionIndex = 0; // Restart quiz if incorrect answer
      showQuestion();
  }
}

showQuestion(); // Afficher la première question au chargement de la page

function showCongratulations() { // Fonction pour afficher un message de félicitations
  resultElement.textContent = "Congratulations! You answered all questions correctly!";
  resultElement.classList.add('congrats');
}

function selectOption(option) {
  const currentQuestion = questions[currentQuestionIndex];
  if (option === currentQuestion.answer) {
      resultElement.textContent = "Correct!";
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
          showQuestion();
      } else {
          showCongratulations(); // Appeler la fonction de félicitations lorsque toutes les questions sont correctement répondues
      }
  } else {
      resultElement.textContent = "Incorrect! Try again.";
      currentQuestionIndex = 0; // Réinitialiser le quiz en cas de réponse incorrecte
      showQuestion(); 
  }
}
// Datos del cuestionario
const quizData = [
  {
    question: "¿Qué fue lo primero que te pedí?",
    options: {
      A: "un lápiz",
      B: "el celular",
      C: "un stiker",
      D: "un cuaderno",
    },
    correctAnswer: "C",
  },
  {
    question: '¿Cuál fue el primer "Don"?',
    options: {
      A: "Don Andrés",
      B: "Don Carlos",
      C: "Don jilipe",
      D: "Don Felipe",
    },
    correctAnswer: "A",
  },
  {
    question: "¿Cómo fue que te agregué la primera vez?",
    options: {
      A: "salito la más humildesita",
      B: "Fresa con nutellita",
      C: "shocolatito pesioso",
      D: "shocolatito",
    },
    correctAnswer: "A",
  },
  {
    question: "¿Cuándo fue el primer día que fui a tu casa?",
    options: {
      A: "miércoles 23 de octubre",
      B: "martes 22 de octubre",
      C: "jueves 24 de octubre",
      D: "sábado 26 de octubre",
    },
    correctAnswer: "A",
  },
  {
    question: "¿Cuál fue nuestra primera cita?",
    options: {
      A: "empanadas en tu casa",
      B: "fuimos al cine",
      C: "vimos una peli en tu casa",
      D: "empanadas en casa de tu papá",
    },
    correctAnswer: "A",
  },
  {
    question: "¿Cuál fue la primer película/serie que vimos?",
    options: {
      A: "Rápidos y Furiosos",
      B: "Malcom el de en medio",
      C: "my little pony",
      D: "enola holmes",
    },
    correctAnswer: "B",
  },
  {
    question: "¿Qué comida compartimos en nuestra primera salida?",
    options: {
      A: "Pizza",
      B: "Hamburguesa",
      C: "Helado",
      D: "Empanadas",
    },
    correctAnswer: "D",
  },
  {
    question: "¿Qué pasó el 17 de noviembre?",
    options: {
      A: "te di el primer beso en la frente",
      B: "me diste el momento más feliz de mi vida (hotwells + Tu boda)",
      C: "te dije el primer Te amo real",
      D: "todas las anteriores",
    },
    correctAnswer: "D",
  },
  {
    question: "El día que nos conocimos, ¿qué ropa tenía puesta yo?",
    options: {
      A: "la camisa roja, jean, Versace",
      B: "la camisa de Colombia, sudadera, Versace",
      C: "la camisa de colombia, jean, Versace",
      D: "la camisa de colombia, jean, amiri",
    },
    correctAnswer: "C",
  },
  {
    question: "¿Cuándo fue la primera vez que fuimos al cine?",
    options: {
      A: "28 de noviembre",
      B: "31 de octubre",
      C: "27 de noviembre",
      D: "Que está la responda mi mamá",
    },
    correctAnswer: "B",
  },
  {
    question: "¿Cómo te empecé a decir shocolatito?",
    options: {
      A: "porque yo era racista y te hacía bullying",
      B: 'porque te empeze a cantar la canción de "el man es Germán" (estregó, estregó, bate chocolate, bate chocolate)',
      C: "porque hablamos de las chocolatinas",
      D: "porque te dije que estabas un poquito oscura",
    },
    correctAnswer: "B",
  },
  {
    question: '¿Cuándo fue la primera vez que te amé sin palabras "🍭"?',
    options: {
      A: "27 de diciembre",
      B: "29 de diciembre",
      C: "11 de diciembre",
      D: "2 de marzo",
    },
    correctAnswer: "A",
  },
  {
    question: "¿Cuántas canciones te he dedicado?",
    options: {
      A: "14",
      B: "16",
      C: "17",
      D: "más de 16",
    },
    correctAnswer: "D",
  },
  {
    question: "¿Cuál fue la primer película que vimos la primera vez que fuimos al cine?",
    options: {
      A: "moana",
      B: "venom",
      C: "Sonic",
      D: "los miniums",
    },
    correctAnswer: "B",
  },
  {
    question: "¿Cuándo nos dimos un beso por primera vez?",
    options: {
      A: "15 de noviembre",
      B: "11 de noviembre",
      C: "1 de diciembre",
      D: "16 de noviembre",
    },
    correctAnswer: "A",
  },
  {
    question: "¿Cuándo empezaste a sentir algo por mí?",
    options: {
      A: "a la primer semana",
      B: "del 16 al 31 de octubre",
      C: "a la segunda semana",
      D: "a la primera semana de noviembre",
    },
    // Cualquier respuesta es correcta para esta pregunta
    correctAnswer: "ANY",
  },
]

// Variables globales
let currentQuestion = 0
let score = 0
let selectedOption = null

// Elementos DOM
const homePage = document.getElementById("home")
const quizPage = document.getElementById("quiz")
const resultsPage = document.getElementById("results")
const startBtn = document.getElementById("start-btn")
const restartBtn = document.getElementById("restart-btn")
const questionText = document.getElementById("question-text")
const options = document.querySelectorAll(".option")
const optionTexts = document.querySelectorAll(".option-text")
const currentQuestionEl = document.getElementById("current-question")
const totalQuestionsEl = document.getElementById("total-questions")
const totalQuestionsResultEl = document.getElementById("total-questions-result")
const correctAnswersEl = document.getElementById("correct-answers")
const resultMessageEl = document.getElementById("result-message")
const progressBar = document.querySelector(".progress")

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  // Configurar contadores de preguntas
  totalQuestionsEl.textContent = quizData.length
  totalQuestionsResultEl.textContent = quizData.length

  // Configurar eventos
  startBtn.addEventListener("click", startQuiz)
  restartBtn.addEventListener("click", restartQuiz)

  options.forEach((option) => {
    option.addEventListener("click", () => selectOption(option))
  })
})

// Funciones
function startQuiz() {
  // Cambiar de página principal a cuestionario
  homePage.classList.remove("active")
  quizPage.classList.add("active")

  // Cargar la primera pregunta
  loadQuestion()
}

function loadQuestion() {
  // Actualizar número de pregunta actual
  currentQuestionEl.textContent = currentQuestion + 1

  // Actualizar barra de progreso
  const progressPercentage = (currentQuestion / quizData.length) * 100
  progressBar.style.width = `${progressPercentage}%`

  // Cargar datos de la pregunta actual
  const questionData = quizData[currentQuestion]
  questionText.textContent = questionData.question

  // Cargar opciones
  let optionIndex = 0
  for (const [key, value] of Object.entries(questionData.options)) {
    optionTexts[optionIndex].textContent = value
    options[optionIndex].dataset.option = key
    options[optionIndex].classList.remove("selected", "correct", "incorrect")
    optionIndex++
  }

  // Resetear selección
  selectedOption = null
}

function selectOption(option) {
  // Si ya se seleccionó una opción, no hacer nada
  if (selectedOption !== null) return

  // Marcar opción como seleccionada
  selectedOption = option.dataset.option
  option.classList.add("selected")

  // Verificar respuesta
  const questionData = quizData[currentQuestion]
  const isCorrect = questionData.correctAnswer === "ANY" || selectedOption === questionData.correctAnswer

  // Actualizar puntuación
  if (isCorrect) {
    score++
    option.classList.add("correct")
  } else {
    option.classList.add("incorrect")

    // Mostrar la respuesta correcta si no es la última pregunta (donde todas son correctas)
    if (questionData.correctAnswer !== "ANY") {
      options.forEach((opt) => {
        if (opt.dataset.option === questionData.correctAnswer) {
          opt.classList.add("correct")
        }
      })
    }
  }

  // Esperar un momento y pasar a la siguiente pregunta
  setTimeout(() => {
    currentQuestion++

    if (currentQuestion < quizData.length) {
      loadQuestion()
    } else {
      showResults()
    }

    selectedOption = null
  }, 1000)
}

function showResults() {
  // Cambiar de cuestionario a resultados
  quizPage.classList.remove("active")
  resultsPage.classList.add("active")

  // Mostrar puntuación
  correctAnswersEl.textContent = score

  // Mostrar mensaje según puntuación
  if (score < 8) {
    resultMessageEl.textContent =
      "¡Lo siento, pero debes practicar más, te quiero igual! Estos 4 meses han sido maravillosos, y espero que sigamos creando más recuerdos juntos."
  } else if (score < 10) {
    resultMessageEl.textContent =
      "¡Bien hecho, seguimos aprendiendo juntos! Estos 4 meses han sido increíbles a tu lado, y cada día me enamoro más de ti."
  } else {
    resultMessageEl.textContent =
      "¡Excelente! Nuestro vínculo es inigualable, te amo. Estos 4 meses han sido los mejores de mi vida, y no puedo esperar para seguir compartiendo muchos más momentos especiales contigo."
  }
}

function restartQuiz() {
  // Reiniciar variables
  currentQuestion = 0
  score = 0
  selectedOption = null

  // Volver a la página principal
  resultsPage.classList.remove("active")
  homePage.classList.add("active")
}

// Función para posicionar aleatoriamente los corazones
function positionHearts() {
  const hearts = document.querySelectorAll(".heart")
  hearts.forEach((heart) => {
    const size = Math.random() * 20 + 20
    heart.style.width = `${size}px`
    heart.style.height = `${size}px`

    heart.style.top = `${Math.random() * 100}%`
    heart.style.left = `${Math.random() * 100}%`

    const duration = Math.random() * 4 + 4
    heart.style.animationDuration = `${duration}s`
  })
}

// Posicionar corazones al cargar
positionHearts()

// $("document").ready(function() {
  var gameStarted = false;
  var numCorrect = 0;
  var numIncorrect = 0;
  var currentQuestion = {};
  var currentQuestionIndex = -1;
  var chosenAnswer = "";
  var questions = [];

  $("button#start-game").on("click", function startGame() {
    gameStarted = false;
    numCorrect = 0;
    numIncorrect = 0;
    currentQuestion = {};
    currentQuestionIndex = -1;
    chosenAnswer = "";
    $("div#buttonContainer").hide();
    $("div#question").empty();
    questions = [
      {
        question: "Which NBA player holds the record for most points scored in a single game?",
        answers: [
          "a: Michael Jordan",
          "b: Wilt Chamberlain",
          "c: Lebron James",
          "d: Kobe Bryant",
        ],
        correctAnswer: "b: Wilt Chamberlain"
      },
      {
        question: "John Stockton holds the career assists record in the NBA. How many assists did he have in his career?",
        answers: [
          "a: 15,806",
          "b: 17,248",
          "c: 14,617",
          "d: 16,091",
        ],
        correctAnswer: "a: 15,806"
      },
      {
        question: "Which NBA team has the most championships?",
        answers: [
          "a: Los Angeles Lakers",
          "b: Chicago Bulls",
          "c: Boston Celtics",
          "d: Golden State Warriors",
        ],
        correctAnswer: "c: Boston Celtics"
      },
      {
        question: "Atlanta is the fourth home of the NBA's Hawks. Which of the following is NOT one of their previous locations?",
        answers: [
          "a: East Moline, Illinois",
          "b: Milwaukee, Wisconsin",
          "c: St. Louis, Missouri",
          "d: Pittsburgh, Pennsylvania",
        ],
        correctAnswer: "d: Pittsburgh, Pennsylvania"
      },
      // {
      //   question: "Which NBA player holds the record for most points scored in a single game?",
      //   answers: [
      //     "a: Michael Jordan",
      //     "b: Wilt Chamberlain",
      //     "c: Lebron James",
      //     "d: Kobe Bryant",
      //   ],
      //   correctAnswer: "b: Wilt Chamberlain"
      // },
      // {
      //   question: "Which NBA player holds the record for most points scored in a single game?",
      //   answers: [
      //     "a: Michael Jordan",
      //     "b: Wilt Chamberlain",
      //     "c: Lebron James",
      //     "d: Kobe Bryant",
      //   ],
      //   correctAnswer: "b: Wilt Chamberlain"
      // },
      // {
      //   question: "Which NBA player holds the record for most points scored in a single game?",
      //   answers: [
      //     "a: Michael Jordan",
      //     "b: Wilt Chamberlain",
      //     "c: Lebron James",
      //     "d: Kobe Bryant",
      //   ],
      //   correctAnswer: "b: Wilt Chamberlain"
      // },
      // {
      //   question: "Which NBA player holds the record for most points scored in a single game?",
      //   answers: [
      //     "a: Michael Jordan",
      //     "b: Wilt Chamberlain",
      //     "c: Lebron James",
      //     "d: Kobe Bryant",
      //   ],
      //   correctAnswer: "b: Wilt Chamberlain"
      // },
      // {
      //   question: "Which NBA player holds the record for most points scored in a single game?",
      //   answers: [
      //     "a: Michael Jordan",
      //     "b: Wilt Chamberlain",
      //     "c: Lebron James",
      //     "d: Kobe Bryant",
      //   ],
      //   correctAnswer: "b: Wilt Chamberlain"
      // },
      // {
      //   question: "Which NBA player holds the record for most points scored in a single game?",
      //   answers: [
      //     "a: Michael Jordan",
      //     "b: Wilt Chamberlain",
      //     "c: Lebron James",
      //     "d: Kobe Bryant",
      //   ],
      //   correctAnswer: "b: Wilt Chamberlain"
      // },
    ];
    function displayQuestion() {
      if (questions.length == 0) {
        $("div.answer").empty();
        $("div#question").html(
          "You got " + numCorrect + " correct<br>" + 
          "You got " + numIncorrect + " incorrect<br>" +
          "You got " + (numCorrect / (numCorrect + numIncorrect)) * 100 + "% correct"
        );
        $("button#start-game").html("Restart Game");
        $("div#buttonContainer").show();
      } else {
        currentQuestionIndex = Math.floor(Math.random() * questions.length)
        currentQuestion = questions[currentQuestionIndex];
        questions.splice(currentQuestionIndex, 1);
        $("div#question").html(currentQuestion.question);
        for (var i = 0; i < Object.keys(currentQuestion.answers).length; i++) {
          $("div#answer" + i).html(currentQuestion.answers[i]);
          console.log(currentQuestion.answers[i]);
        };
        setTimer();
      }
    }

    var timer;

    function setTimer() {
      var timeLeft = 10
      $("#questionTimer").html(timeLeft);
      timer = setInterval(function x() { 
        $('#questionTimer').html(timeLeft--);
        if (timeLeft == -1) {
          clearInterval(timer);    
          $("div#questionTimer").empty();
          numIncorrect++;
          alert("time's up"); 
          displayQuestion();   
        } 
        return x;
      }(), 1000);
    };

    $("div.answer").on("click", function() {
      chosenAnswer = $(this).text();
      clearInterval(timer);
      $("div#questionTimer").empty();
      checkAnswer();
    });
  
    function checkAnswer() {
      if (chosenAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        $("div#question").empty();
        $("div.answer").empty();
        alert("right");
        displayQuestion();
      } else {
        numIncorrect++;
        $("div#question").empty();
        $("div.answer").empty();
        alert("wrong");
        displayQuestion();
      }
    };

    displayQuestion();
  });

  // startGame();
  

  // displayQuestion();

// });
// $("document").ready(function() {
  var numCorrect = 0;
  var numIncorrect = 0;
  var currentQuestion = {};
  var currentQuestionIndex = -1;
  var chosenAnswer = "";
  var chosenOption;
  var questions = [];

  $("button#start-game").on("click", function startGame() {
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
          "Michael Jordan",
          "Wilt Chamberlain",
          "Lebron James",
          "Kobe Bryant",
        ],
        correctAnswer: "Wilt Chamberlain"
      },
      {
        question: "John Stockton holds the career assists record in the NBA. How many assists did he have in his career?",
        answers: [
          "15,806",
          "17,248",
          "14,617",
          "16,091",
        ],
        correctAnswer: "15,806"
      },
      {
        question: "Which NBA team has the most championships?",
        answers: [
          "Los Angeles Lakers",
          "Chicago Bulls",
          "Boston Celtics",
          "Golden State Warriors",
        ],
        correctAnswer: "Boston Celtics"
      },
      {
        question: "Atlanta is the fourth home of the NBA's Hawks. Which of the following is NOT one of their previous locations?",
        answers: [
          "East Moline, Illinois",
          "Milwaukee, Wisconsin",
          "St. Louis, Missouri",
          "Pittsburgh, Pennsylvania",
        ],
        correctAnswer: "Pittsburgh, Pennsylvania"
      },
      // {
      //   question: "Which NBA player holds the record for most points scored in a single game?",
      //   answers: [
      //     "Michael Jordan",
      //     "Wilt Chamberlain",
      //     "Lebron James",
      //     "Kobe Bryant",
      //   ],
      //   correctAnswer: "Wilt Chamberlain"
      // },
      // {
      //   question: "Which NBA player holds the record for most points scored in a single game?",
      //   answers: [
      //     "Michael Jordan",
      //     "Wilt Chamberlain",
      //     "Lebron James",
      //     "Kobe Bryant",
      //   ],
      //   correctAnswer: "Wilt Chamberlain"
      // },
      // {
      //   question: "Which NBA player holds the record for most points scored in a single game?",
      //   answers: [
      //     "Michael Jordan",
      //     "Wilt Chamberlain",
      //     "Lebron James",
      //     "Kobe Bryant",
      //   ],
      //   correctAnswer: "Wilt Chamberlain"
      // },
      // {
      //   question: "Which NBA player holds the record for most points scored in a single game?",
      //   answers: [
      //     "Michael Jordan",
      //     "Wilt Chamberlain",
      //     "Lebron James",
      //     "Kobe Bryant",
      //   ],
      //   correctAnswer: "Wilt Chamberlain"
      // },
      // {
      //   question: "Which NBA player holds the record for most points scored in a single game?",
      //   answers: [
      //     "Michael Jordan",
      //     "Wilt Chamberlain",
      //     "Lebron James",
      //     "Kobe Bryant",
      //   ],
      //   correctAnswer: "Wilt Chamberlain"
      // },
      // {
      //   question: "Which NBA player holds the record for most points scored in a single game?",
      //   answers: [
      //     "Michael Jordan",
      //     "Wilt Chamberlain",
      //     "Lebron James",
      //     "Kobe Bryant",
      //   ],
      //   correctAnswer: "Wilt Chamberlain"
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
        currentQuestionIndex = -1;
        $("div#buttonContainer").show();
      } else {
        currentQuestionIndex = Math.floor(Math.random() * questions.length);
        currentQuestion = questions[currentQuestionIndex];
        questions.splice(currentQuestionIndex, 1);
        $("div#question").html(currentQuestion.question);
        for (var i = 0; i < Object.keys(currentQuestion.answers).length; i++) {
          if (currentQuestion.answers[i] === currentQuestion.correctAnswer) {
            $("div#answer" + i).html("<button class='btn btn-secondary' data-value='correct'>" + currentQuestion.answers[i] + "</button>");
          } else {
            $("div#answer" + i).html("<button class='btn btn-secondary'>" + currentQuestion.answers[i] + "</button>");
          }
        };
        setTimer();
      }
    }

    displayQuestion();

    var timer;

    function setTimer() {
      var timeLeft = 10
      $("#questionTimer").html(timeLeft);
      timer = setInterval(function x() { 
        $('#questionTimer').html("You have " + timeLeft-- + " seconds remaining");
        if (timeLeft == -1) {
          clearInterval(timer);    
          $("div#questionTimer").empty();
          numIncorrect++;
          $("div#question").text("Sorry, you ran out of time, the correct answer was:");
          $("[data-value='correct']").addClass("btn-success"); 
          var displayNextQuestion = setTimeout(displayQuestion, 3000);   
        } 
        return x;
      }(), 1000);
    };

    $("div.answer").off("click").on("click", "button", function() {
      chosenButton = $(this);
      chosenAnswer = $(this).text();
      clearInterval(timer);
      $("div#questionTimer").empty();
      checkAnswer();
    });
  
    function checkAnswer() {
      if (chosenAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        $("div#question").empty();
        $("div#question").text("That's Correct!");
        chosenButton.addClass("btn-success");
        var displayNextQuestion = setTimeout(displayQuestion, 3000);
      } else {
        numIncorrect++;
        $("div#question").empty();
        $("div#question").text("Sorry, you got it wrong, the correct answer was:");
        chosenButton.addClass("btn-danger");
        $("[data-value='correct']").addClass("btn-success");
        var displayNextQuestion = setTimeout(displayQuestion, 3000);
      }
    };


    // displayQuestion();
      
  });


// });
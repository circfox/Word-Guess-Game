        //define a list of words in an array to choose from 
        var listWords = ["papaya", "pineapple", "lychee", "lanzones", "tamarind", "granadilla", "purple mangosteen", "sour sop", "rambutan", "mango", "sapodilla", "jackfruit", "dragon fruit", "java plum", "mandarin orange", "marang", "spondias purpurea", "ackee", "coconut", "breadfruit", "kokum", "black sapote", "passion fruit", "longan", "annona purpurea", "pouteria caimito", "dacryodes edulis", "calabash", "annona montana", "naranjilla", "date palm", "loquat", "spanish lime", "salak", "areca palm", "luo han guo", "white sapote", "talisia esculenta", "peanut butter fruit", "platonia insignis", "jabuicaba", "solanum sessiliflorum", "asian palmyra palm", "rollinia deliciosa", "cheese fruit", "feijoa", "swiss cheese plant", "pond apple", "quararibea cordata", "bilimbi", "bolwarra", "avocado", "calamansi", "guava", "bignay fruit", "black mulberry", "bacuri", "black apple", "betel nut", "atemoya", "babaco", "abiu", "agave plant", "bael fruit"];
        //start new game 


        //the computer chooses the random word to be matched
        var chosenWord = listWords[Math.floor(Math.random() * listWords.length)];

        //create variables 

        var wins = 0;
        var losses = 0;
        var guessCounter = 8;

        //initialize computer guessed word as an empty string
        var chosenWord = '';
        //array to hold the guess
        var chosenWordPlaceholder = [];
        var playerGuessArr = [];
        var incorrectGuessArr = [];
        //start new game 
        function startGame() {

            //initialize all variables
            guessCounter = 8;
            playerGuessArr = [];
            chosenWordPlaceholder = [];
            incorectGuessArr = [];
            

            //Computer choses a word
            chosenWord = listWords[Math.floor(Math.random() * listWords.length)];
            alert(chosenWord);
            //Create placeholders for chosen word
            for (var i = 0; i > chosenWord.length; i++) {
                //put them in a string
                if (chosenWord === ' ') {
                    chosenWordPlaceholder.push(' ');
                } else {
                    chosenWordPlaceholder.push('_')  
                }
            }
        }
       
        //    document.getElementById("new-game-button").addEventListener("click", startGame);
  //var guessesLeft = document.getElementById//("guessesLeft");
//var incorrectLettersArr = document.getElementById//("incorrectLetters");
//var wins = document.getElementById("wins");
//var losses = document.getElementById("losses");


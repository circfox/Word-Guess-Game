$(document).ready(function () {
    $("#spin").on("click", Spin)
});
//References to DOM elements
var spin = document.getElementById("spin");
//var category = document.getElementById("category");
var placeHolder = document.getElementById("placeholder");
var guessesLeft = document.getElementById("guesses-left");
var incorrectLetters = document.getElementById("guessed-letters");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");

//Create variables

var gameOn = false;
var guessesLeft = 7;
var wins = 0;
var losses = 0;
var chosenWord = '';
var chosenWordPlaceholder = [];

//category titles
var categories = ["Tropical Fruits", "Books Of The Bible", "American Bands", "Phrases"];

//list of words in each category arrays a, b, c, d correspond to "Tropical Fruits", "Phrases", "Books Of The Bible", and "American Bands"
a = ["papaya", "pineapple", "lychee", "lanzones", "tamarind", "granadilla", "purple mangosteen", "sour sop", "rambutan", "mango", "sapodilla", "jackfruit", "dragon fruit", "java plum", "mandarin orange", "marang", "spondias purpurea", "ackee", "coconut", "breadfruit", "kokum", "black sapote", "passion fruit", "longan", "annona purpurea", "pouteria caimito", "dacryodes edulis", "calabash", "annona montana", "naranjilla", "date palm", "loquat", "spanish lime", "salak", "areca palm", "luo han guo", "white sapote", "talisia esculenta", "peanut butter fruit", "platonia insignis", "jabuicaba", "solanum sessiliflorum", "asian palmyra palm", "rollinia deliciosa", "cheese fruit", "feijoa", "swiss cheese plant", "pond apple", "quararibea cordata", "bilimbi", "bolwarra", "avocado", "calamansi", "guava", "bignay fruit", "black mulberry", "bacuri", "black apple", "betel nut", "atemoya", "babaco", "abiu", "agave plant", "bael fruit"];
b = ["a bolt from the blue", "a career that spanned generations", "a cat has nine lives", "a fair for dramatic", "chasing the winer blues", "better you than me", "clear skies and smooth waters", "chip off the old block", "can i have a dance", "call for a free brochure", "captain hook line and sinker", "buy one get on free", "closed-captioning for the hearing impaired", "coming through the clutch", "cool on teh wire rack", "cut from the same cloth", "cutoff without a penny", "chances are slim to none", "drama on the high seas", "everything old is new again", "eat to your heart's content", "go with your gut instinct", "going off the deep end", "getting it under the wire", "in the line of fire"];
c = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nenemiah", "Eshther", "Psalms", "Jobs", "Proverbs", "Ecclesiastias", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephania", "Haggai", "Zecharia", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "Jude", "Revelation"]
d = ["Journey", "Styx", "Loggins and Messina", "Earth Wind and Fire", "Nirvana", "Beach Boys", "The Ramones", "Tom Petty And The Heartbreakers", "Cheaptrick", "The Doors", "Grateful Dead", "The Eagles", "Kiss", "Creedence Clearwater Revival", "Bonjovi", "Aerosmith", "The Allman Brothers", "Metallica", "Bruce Springteen and the E Street Band", "Van Halen", "The Byrds", "Guns N' Roses", "Lynyrd Skynyrd", "Pearl Jam", "The Velvet Underground", "The Stooges", "Wilco", "Buddy Holly and the Crickets", "The White Stripes", "The Replacements", "Big Star", "ZZ Top", "Talking Heads", "Buffalo Springfield", "Alice Cooper", "The Strokes", "Heart", "Los Lobos", "Sonic Youth", "Sly and the Family Stone", "The J. Geils Band", "Green Day", "The Lovin' Spoonful", "NRBQ", "The Flaming Lips", "Kings of Leon", "Frank Zappa and the Mothers of Invention", "Pixies", "Alice in Chains", "Cracker", "Foo Fighters", "The Byrds"];


//start new game /
//Make the Spin function available
//$(document).ready(function () {
//   $("#spin").on("click", Spin)
//});
//var placeHolder = document.getElementById("place-holder");
//Spin starts a new game
function Spin() {

    //Reset everything
    gameOn = true;
    chosenCategory = '';
    chosenWord = '';
    guessesLeft = 7;
    guessedLetters = [];
    IncorrectLetters = [];
    placeHolder = [];
    category = "";
    chosenWordPlaceholder = [];


    // Chooses Category at random.
    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    console.log(chosenCategory);
    //alert(chosenCategory);
    category = "";

    // Add category to HTML file.
    var category = document.getElementById("category");
    for (var i = 0; i < chosenCategory.length; i++) {
        var wordElement = document.createTextNode("p");
        wordElement.textContent = chosenCategory[i];
        category.appendChild(wordElement);
    }


    // Based on chosen category, we choose word.
    if ((chosenCategory == "Tropical Fruits") && (chosenCategory != "Books Of The Bible") && (chosenCategory != "American Bands") && (chosenCategory != "Phrases")) {
        chosenCategory = "Tropical Fruits";
        chosenWord = a[Math.floor(Math.random() * a.length)];
        console.log(chosenWord);
    }

    if ((chosenCategory == "Books Of The Bible") && (chosenCategory != "Tropical Fruits") && (chosenCategory != "American Bands") && (chosenCategory != "Phrases")) {
        chosenCategory = "Books Of The Bible";
        chosenWord = c[Math.floor(Math.random() * c.length)];
        console.log(chosenWord);
    }

    if ((chosenCategory == "American Bands") && (chosenCategory != "Tropical Fruits") && (chosenCategory != "Books Of The Bible") && (chosenCategory != "Phrases")) {
        chosenCategory = "American Bands";
        chosenWord = d[Math.floor(Math.random() * d.length)];
        console.log(chosenWord);
    }

    if ((chosenCategory == "Phrases") && (chosenCategory != "Tropical Fruits") && (chosenCategory != "Books Of The Bible") && (chosenCategory != "American Bands")) {
        chosenCategory = "Phrases";
        chosenWord = b[Math.floor(Math.random() * b.length)];
        console.log(chosenWord);

    }

    // Create Array of Blanks, spaces, dashes, etc.
    for (var i = 0; i < chosenWord.length; i++) {
        // put them in a string
        if (chosenWord[i] === " ") {
            chosenWordPlaceholder.push(" ");
        }
        if (chosenWord[i] === "'") {
            chosenWordPlaceholder.push("'");
        }
        if (chosenWord[i] === "-") {
            chosenWordPlaceholder.push("-");
        }
        else {
            chosenWordPlaceholder.push("_");
        }
    }
    console.log("chosenWordLength: " + chosenWord.length);
    console.log("chosenWordPlaceholder: " + chosenWordPlaceholder);
    console.log("game on: " + gameOn);


    // We go through Array of Blanks and place onto HTLM file.
    var placeHolder = document.getElementById("placeholder");
    for (var i = 0; i < chosenWordPlaceholder.length; i++) {
        var wordElement = document.createTextNode(' ');
        wordElement.textContent = chosenWordPlaceholder[i];
        placeHolder.appendChild(wordElement);
    }
}

console.log(chosenWord.length);
console.log(chosenWord);
//}

// chosenWord = "Harry Potter";

// currentGuess = --> grabs input "keyup"
//
// for(let i = 0; i < chosenWord.length; i++){
//
// }


//Match the letters of the guess word
console.log(gameOn);
function letterGuess(letter) {
console.log("current letter: " + letter);
console.log("chosenWordLength: " + chosenWord.length);
// console.log(guessedLetters);
    if (gameOn == true && guessedLetters.indexOf(letter) == -1) {


      // we get a guess from user.
        console.log("guessedLetters: " + guessedLetters)
        guessedLetters.push(letter);

        // var hasLetter = false;
        // if we find user input letter at any spot, change it.
        for (var i = 0; i < chosenWord.length; i++) {

            // go through each chosen word, and check if that letter is equal to user input "k".
            if (chosenWord[i].toLowerCase() === letter.toLowerCase()) {

                // if we find a letter that's changed.
                // hasLetter = true;

                // replace Array of blanks with chosen letter at index "i".
                // here we are setting location to user input "k"
                chosenWordPlaceholder[i] = chosenWord[i];

                // chosenWordPlaceholder Array
                //[ "_", "_", "_", "_", "k", "_", "k", "k", "_", ""]
                // The Lion King
            }
            //
            // if (hasLetter === false){
            //   incorrectLetters.push(letter)
            // }
        }

        // NOW we can create the new string.
        var placeHolder = document.getElementById("placeholder");
        placeholder.innerHTML = "";
        for (var i = 0; i < chosenWordPlaceholder.length; i++) {

            var wordElement = document.createTextNode(" ");
            wordElement.textContent = chosenWordPlaceholder[i];
            placeHolder.appendChild(wordElement);


            // <span id="placeholder">______________g</span>
        }
        //
        // var placeHolder = document.getElementById("placeholder");
        // placeholder.innerHTML = "";
        // for (var i = 0; i < incorrectLetters.length; i++) {
        //
        //     var wordElement = document.createTextNode(" ");
        //     wordElement.textContent = chosenWordPlaceholder[i];
        //     placeHolder.appendChild(wordElement);
        //
        //
        //     // <span id="placeholder">______________g</span>
        // }




       // placeHolder.textContent = chosenWordPlaceholder.join[''];

    }

    else {
        if (!gameOn) {
            alert("Game is Off! Click Spin to start a new game.");
        } else {
            alert("Try a new letter.");
        }
        //console.log(letter);
    }
}


document.onkeyup = function (event) {
   if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 65 && event.keyCode <= 90)) {
       letterGuess(event.key);
        gameOn = true;
        console.log("gameOn "+ gameOn);
    }
}

//console.log(chosenWordPlaceholder);


// Game Plan
/*






*/

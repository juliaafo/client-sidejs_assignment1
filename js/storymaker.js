// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
var noun1Button = document.querySelector("#noun1");
var verbButton = document.querySelector("#verb");
var adjectiveButton = document.querySelector("#adjective");
var noun2Button = document.querySelector("#noun2");
var settingButton = document.querySelector("#setting");
var playbackButton = document.querySelector("#playback");
var randomButton = document.querySelector("#random");
var resetButton = document.querySelector("#reset"); // a reset button

/* Constants for p tag to display query selectors */
var noun1Display = document.querySelector("#choosenNoun1");
var verbDisplay = document.querySelector("#choosenVerb");
var adjectiveDisplay = document.querySelector("#choosenAdjective");
var noun2Display = document.querySelector("#choosenNoun2");
var settingDisplay = document.querySelector("#choosenSetting");
var finalStoryDisplay = document.querySelector("#story");

/* Constants for final buttons and p tags */
var studentIdDisplay = document.querySelector("#studentId");

/* Variables for pre-defined arrays */
var nouns1 = ["The turkey", "Mom", "The dog", "My teacher", "The elephant", "The cat"];
var verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

/* Variables for count to grab array elements */
var selectedNoun1 = "";
var selectedVerb = "";
var selectedAdjective = "";
var selectedNoun2 = "";
var selectedSetting = "";

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    selectedNoun1 = nouns1[Math.floor(Math.random() * nouns1.length)];
    noun1Display.textContent = selectedNoun1;

    // used for debugging/logging
    if (selectedNoun1) {
        console.log("Noun 1 selected:", selectedNoun1);
    }
}

function verb_on_click() {
    selectedVerb = verbs[Math.floor(Math.random() * verbs.length)];
    verbDisplay.textContent = selectedVerb;
}

function adjective_on_click() {
    selectedAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    adjectiveDisplay.textContent = selectedAdjective;
}

function noun2_on_click() {
    selectedNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
    noun2Display.textContent = selectedNoun2;
}

function setting_on_click() {
    selectedSetting = settings[Math.floor(Math.random() * settings.length)];
    settingDisplay.textContent = selectedSetting;
}

// concatenate the user story and display
function playback_on_click() {
    if (selectedNoun1 && selectedVerb && selectedAdjective && selectedNoun2 && selectedSetting) {
        finalStoryDisplay.textContent = `${selectedNoun1} ${selectedVerb} ${selectedAdjective} ${selectedNoun2} ${selectedSetting}.`;
    } else {
        finalStoryDisplay.textContent = "Please select words for each category before generating the story.";
    }
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    selectedNoun1 = nouns1[Math.floor(Math.random() * nouns1.length)];
    selectedVerb = verbs[Math.floor(Math.random() * verbs.length)];
    selectedAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    selectedNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
    selectedSetting = settings[Math.floor(Math.random() * settings.length)];

    finalStoryDisplay.textContent = `${selectedNoun1} ${selectedVerb} ${selectedAdjective} ${selectedNoun2} ${selectedSetting}.`;

    // Update the display for each category
    noun1Display.textContent = selectedNoun1;
    verbDisplay.textContent = selectedVerb;
    adjectiveDisplay.textContent = selectedAdjective;
    noun2Display.textContent = selectedNoun2;
    settingDisplay.textContent = selectedSetting;
}

// function to reset the story 
function reset_on_click() {
    selectedNoun1 = "";
    selectedVerb = "";
    selectedAdjective = "";
    selectedNoun2 = "";
    selectedSetting = "";

    noun1Display.textContent = "";
    verbDisplay.textContent = "";
    adjectiveDisplay.textContent = "";
    noun2Display.textContent = "";
    settingDisplay.textContent = "";
    finalStoryDisplay.textContent = "The story has been reset.";
}

// Function to dynamically add student ID (requirement #6)
function addStudentInfo() {
    studentIdDisplay.textContent = "Student Name: Yuliya Afonin,  ID#: 1263749";
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);
resetButton.addEventListener("click", reset_on_click); // new feature

// Call function to insert student info when page loads
window.onload = addStudentInfo;

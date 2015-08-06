/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="config/config.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/gameobjects.ts" />
/// <reference path="objects/gradient.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="logics/grid.ts" />
/// <reference path="states/start.ts" />
/// <reference path="states/instruction.ts" />
/// <reference path="states/play.ts" />
/// <reference path="objects/towers.ts" />
/// <reference path="objects/goldtower.ts" />
/// <reference path="objects/rocktower.ts" />
/// <reference path="objects/icetower.ts" />
/// <reference path="objects/firetower.ts" />
// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage;
var game;
var stats;
// Game Managers
var assets;
// Game States
var currentStateFunction; // State Alias
var currentState;
var start;
var instruction;
var play;
// Background Variables
var gradient;
var startScreen;
// Gane Variables
var scoreBoard;
var towerName;
var cell;
var firetower;
var grid;
var gridArray = [];
var selectedTower = [];
// Preloader Function
function preload() {
    assets = new managers.Assets();
    //Setup statistics object
    setupStats();
}
// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop);
    // Sets the current state
    currentState = config.START_STATE;
    // calling main game function
    changeState();
}
// Function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps
    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '830px';
    stats.domElement.style.top = '10px';
    document.body.appendChild(stats.domElement);
}
// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring
    //currentStateFunction.update();
    currentStateFunction.update();
    stage.update();
    stats.end(); // end measuring
}
// Main Game Function
function changeState() {
    // Instantiate new game container
    game = new createjs.Container();
    // State Machine
    switch (currentState) {
        case config.START_STATE:
            // Instantiate start state            
            start = new state.Start();
            currentStateFunction = start;
            break;
        case config.INSTRUCTION_STATE:
            // Instantiate instruction state
            instruction = new state.Instruction();
            currentStateFunction = instruction;
            break;
        case config.PLAY_STATE:
            // Instantiate play state
            play = new state.Play();
            currentStateFunction = play;
            break;
    }
    // Add game container to stage
    stage.addChild(game);
}
//# sourceMappingURL=game.js.map
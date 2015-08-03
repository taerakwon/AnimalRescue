/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="config/config.ts" />
/// <reference path="managers/asset.ts" />

/// <reference path="objects/gameobjects.ts" />


/// <reference path="objects/button.ts" />



/// <reference path="states/start.ts" />




// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var game: createjs.Container;
var stats: Stats;


// Game Managers
var assets: managers.Assets;

// Game States
var currenStateFunction; // State Alias
var currenState: number;
var start: state.Start;

// Background Variables
var startScreen: createjs.Bitmap;


// Gane Variables

// Preloader Function
function preload() {
    assets = new managers.Assets();
    //Setup statistics object
    setupStats();
}

// Callback function that initializes game objects
function init()
{
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop); 

    // Sets the current state
    currenState = config.START_STATE;

    // calling main game function
    changeState();
}

// Function to setup stat counting
function setupStats()
{
    stats = new Stats();
    stats.setMode(0); // set to fps

    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '830px';
    stats.domElement.style.top = '10px';
    document.body.appendChild(stats.domElement);
}


// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop()
{
    stats.begin(); // Begin measuring
    stage.update();
    stats.end(); // end measuring
}

// Main Game Function
function changeState() {
    // Instantiate new game container
    game = new createjs.Container();

    // State Machine
    switch (currenState) {
        case config.START_STATE:
            // Instatiate start state            
            start = new state.Start();
            currenStateFunction = start;
            break;
    }

    // Add game container to stage
    stage.addChild(game);
}

/// <reference path="states/level3.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="config/config.ts" />

/// <reference path="utility/utility.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="managers/collision.ts" />


/// <reference path="objects/label.ts" />
/// <reference path="objects/gameobjects.ts" />
/// <reference path="objects/gradient.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="logics/grid.ts" />


/// <reference path="states/start.ts" />
/// <reference path="states/instruction.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/level2.ts" />
/// <reference path="states/level3.ts" />
/// <reference path="states/end.ts" />
/// <reference path="states/win.ts" />




/// <reference path="objects/towers.ts" />
/// <reference path="objects/goldtower.ts" />
/// <reference path="objects/rocktower.ts" />
/// <reference path="objects/icetower.ts" />
/// <reference path="objects/firetower.ts" />

/// <reference path="objects/missile.ts" />




/// <reference path="objects/bowhunter.ts" />
/// <reference path="objects/knifehunter.ts" />
/// <reference path="objects/riflehunter.ts" />







// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var game: createjs.Container;
var stats: Stats;

// Game Managers
var assets: managers.Assets;
var collision: managers.Collision;

// Game States
var currentStateFunction; // State Alias
var currentState: number;
var start: state.Start;
var instruction: state.Instruction;
var play: state.Play;
var level2: state.Level2;
var level3: state.Level3;
var end: state.End;
var win: state.Winstate;

// Background Variables
var gradient: objects.Gradient;
var startScreen: createjs.Bitmap;
var bgm: createjs.AbstractSoundInstance;


// Game Towers
var fireTower: objects.Firetower;
var goldTower: objects.Goldtower;
var rockTower: objects.Rocktower;
var iceTower: objects.Icetower;

var missile: objects.Missile;

// Game Variables
var scoreBoard: objects.ScoreBoard;
var towerName;
var cell: objects.Tower;
var grid: logic.Grid;
var gridArray = [];
var selectedTower: string = "empty";
var towerBuilt: number = 0;
var goldTowerBuilt: number = 0;
var bowhunter: objects.Bowhunter;
var bowhunters: objects.Bowhunter[] = [];
var knifehunters: objects.Knifehunter[] = [];
var riflehunters: objects.Riflehunter[] = [];
var gameOver: boolean = false;

var goldTowerArray: objects.Goldtower[] = [];
var rockTowerArray: objects.Rocktower[] = [];
var fireTowerArray: objects.Firetower[] = [];
var iceTowerArray: objects.Icetower[] = [];
var missile: objects.Missile;
var missileArray: objects.Missile[] = [];

var score: number = 0;



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
            game.removeAllChildren();
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
            game.removeAllChildren();
            // Instantiate play state
            play = new state.Play();
            currentStateFunction = play;
            break;
        case config.LEVEL2_STATE:
            game.removeAllChildren();
            // Instantiate play state
            level2 = new state.Level2();
            currentStateFunction = level2;
            break;
        case config.LEVEL3_STATE:
            game.removeAllChildren();
            // Instantiate play state
            level3 = new state.Level3();
            currentStateFunction = level3;
            break;
        case config.END_STATE:
            // Instantiate end state
            end = new state.End();
            currentStateFunction = end;
            break;
        case config.WIN_STATE:
            game.removeAllChildren();
            // Instantiate win state
            win = new state.Winstate();
            currentStateFunction = win;
            break;
    }    

    // Add game container to stage
    stage.addChild(game);
}

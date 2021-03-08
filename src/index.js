"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./css/index.scss");
var CanvasView_1 = require("./assets/view/CanvasView");
var Ball_1 = require("./assets/sprites/Ball");
var Paddle_1 = require("./assets/sprites/Paddle");
var Collision_1 = require("./Collision");
// Images
var paddle_png_1 = __importDefault(require("./assets/img/paddle.png"));
var ball_png_1 = __importDefault(require("./assets/img/ball.png"));
// Level and colors
var setup_1 = require("./setup");
// Helpers
var helpers_1 = require("./helpers");
var gameOver = false;
var score = 0;
function setGameOver(view) {
    view.drawInfo('Game Over!');
    gameOver = false;
}
function setGameWin(view) {
    view.drawInfo('Game Won!');
    gameOver = false;
}
function gameLoop(view, bricks, paddle, ball, collision) {
    console.log('draw!');
    view.clear();
    view.drawBricks(bricks);
    view.drawSprite(paddle);
    view.drawSprite(ball);
    // Move Ball
    ball.moveBall();
    // Move paddle and check so it won't exit the playfield
    if ((paddle.isMovingLeft && paddle.pos.x > 0) ||
        (paddle.isMovingRight && paddle.pos.x < view.canvas.width - paddle.width)) {
        paddle.movePaddle();
    }
    collision.checkBallCollision(ball, paddle, view);
    var collidingBrick = collision.isCollidingBricks(ball, bricks);
    if (collidingBrick) {
        score += 1;
        view.drawScore(score);
    }
    // Game Over when ball leaves playField
    if (ball.pos.y > view.canvas.height)
        gameOver = true;
    // If game won, set gameOver and display win
    if (bricks.length === 0)
        return setGameWin(view);
    // Return if gameover and don't run the requestAnimationFrame
    if (gameOver)
        return setGameOver(view);
    requestAnimationFrame(function () { return gameLoop(view, bricks, paddle, ball, collision); });
}
function startGame(view) {
    // Reset displays
    score = 0;
    view.drawInfo('');
    view.drawScore(0);
    // Create a collision instance
    var collision = new Collision_1.Collision();
    // Create all bricks
    var bricks = helpers_1.createBricks();
    // Create a Ball
    var ball = new Ball_1.Ball(setup_1.BALL_SPEED, setup_1.BALL_SIZE, { x: setup_1.BALL_STARTX, y: setup_1.BALL_STARTY }, ball_png_1.default);
    // Create a Paddle
    var paddle = new Paddle_1.Paddle(setup_1.PADDLE_SPEED, setup_1.PADDLE_WIDTH, setup_1.PADDLE_HEIGHT, {
        x: setup_1.PADDLE_STARTX,
        y: view.canvas.height - setup_1.PADDLE_HEIGHT - 5
    }, paddle_png_1.default);
    gameLoop(view, bricks, paddle, ball, collision);
}
// Create a new view
var view = new CanvasView_1.CanvasView('#playField');
view.initStartButton(startGame);

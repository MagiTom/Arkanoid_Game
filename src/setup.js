"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LEVEL = exports.BRICK_ENERGY = exports.BRICK_IMAGES = exports.BALL_STARTY = exports.BALL_STARTX = exports.BALL_SIZE = exports.BALL_SPEED = exports.PADDLE_SPEED = exports.PADDLE_STARTX = exports.PADDLE_HEIGHT = exports.PADDLE_WIDTH = exports.BRICK_HEIGHT = exports.BRICK_WIDTH = exports.BRICK_PADDING = exports.STAGE_COLS = exports.STAGE_ROWS = exports.STAGE_PADDING = void 0;
var brick_red_png_1 = __importDefault(require("./assets/img/brick-red.png"));
var brick_blue_png_1 = __importDefault(require("./assets/img/brick-blue.png"));
var brick_green_png_1 = __importDefault(require("./assets/img/brick-green.png"));
var brick_yellow_png_1 = __importDefault(require("./assets/img/brick-yellow.png"));
var brick_purple_png_1 = __importDefault(require("./assets/img/brick-purple.png"));
// Grab the canvas element for calculating the brick width
// depending on canvas width
var canvas = document.querySelector('#playField');
// Constants
exports.STAGE_PADDING = 10;
exports.STAGE_ROWS = 20;
exports.STAGE_COLS = 10;
exports.BRICK_PADDING = 5;
exports.BRICK_WIDTH = canvas
    ? Math.floor((canvas.width - exports.STAGE_PADDING * 2) / exports.STAGE_COLS) - exports.BRICK_PADDING
    : 100;
exports.BRICK_HEIGHT = canvas
    ? Math.floor((canvas.height - exports.STAGE_PADDING * 2) / exports.STAGE_ROWS) - exports.BRICK_PADDING
    : 30;
exports.PADDLE_WIDTH = 150;
exports.PADDLE_HEIGHT = 25;
exports.PADDLE_STARTX = 450;
exports.PADDLE_SPEED = 10;
exports.BALL_SPEED = 5;
exports.BALL_SIZE = 20;
exports.BALL_STARTX = 500;
exports.BALL_STARTY = 400;
exports.BRICK_IMAGES = {
    1: brick_red_png_1.default,
    2: brick_green_png_1.default,
    3: brick_yellow_png_1.default,
    4: brick_blue_png_1.default,
    5: brick_purple_png_1.default
};
exports.BRICK_ENERGY = {
    1: 1,
    2: 1,
    3: 2,
    4: 2,
    5: 3 // Purple brick
};
// prettier-ignore
exports.LEVEL = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 1, 1, 1, 1, 1, 0, 0,
    0, 2, 2, 2, 2, 2, 2, 2, 2, 0,
    0, 3, 3, 3, 3, 3, 3, 3, 3, 0,
    0, 0, 4, 4, 4, 4, 4, 4, 0, 0,
    0, 0, 5, 5, 0, 0, 5, 5, 0, 0,
];

"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBricks = void 0;
var Brick_1 = require("./assets/sprites/Brick");
var setup_1 = require("./setup");
function createBricks() {
    return setup_1.LEVEL.reduce(function (ack, element, i) {
        var row = Math.floor((i + 1) / setup_1.STAGE_COLS);
        var col = i % setup_1.STAGE_COLS;
        var x = setup_1.STAGE_PADDING + col * (setup_1.BRICK_WIDTH + setup_1.BRICK_PADDING);
        var y = setup_1.STAGE_PADDING + row * (setup_1.BRICK_HEIGHT + setup_1.BRICK_PADDING);
        if (element === 0)
            return ack;
        return __spreadArray(__spreadArray([], ack), [
            new Brick_1.Brick(setup_1.BRICK_WIDTH, setup_1.BRICK_HEIGHT, { x: x, y: y }, setup_1.BRICK_ENERGY[element], setup_1.BRICK_IMAGES[element])
        ]);
    }, []);
}
exports.createBricks = createBricks;

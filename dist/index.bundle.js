/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Collision.ts":
/*!**************************!*\
  !*** ./src/Collision.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Collision = void 0;\r\nvar Collision = /** @class */ (function () {\r\n    function Collision() {\r\n    }\r\n    Collision.prototype.isCollidingBrick = function (ball, brick) {\r\n        if (ball.pos.x < brick.pos.x + brick.width &&\r\n            ball.pos.x + ball.width > brick.pos.x &&\r\n            ball.pos.y < brick.pos.y + brick.height &&\r\n            ball.pos.y + ball.height > brick.pos.y) {\r\n            return true;\r\n        }\r\n        return false;\r\n    };\r\n    // Check ball collision with bricks\r\n    Collision.prototype.isCollidingBricks = function (ball, bricks) {\r\n        var _this = this;\r\n        var colliding = false;\r\n        bricks.forEach(function (brick, i) {\r\n            if (_this.isCollidingBrick(ball, brick)) {\r\n                ball.changeYDirection();\r\n                if (brick.energy === 1) {\r\n                    bricks.splice(i, 1);\r\n                }\r\n                else {\r\n                    brick.energy -= 1;\r\n                }\r\n                colliding = true;\r\n            }\r\n        });\r\n        return colliding;\r\n    };\r\n    Collision.prototype.checkBallCollision = function (ball, paddle, view) {\r\n        // 1. Check ball collision with paddle\r\n        if (ball.pos.x + ball.width > paddle.pos.x &&\r\n            ball.pos.x < paddle.pos.x + paddle.width &&\r\n            ball.pos.y + ball.height === paddle.pos.y) {\r\n            ball.changeYDirection();\r\n        }\r\n        // 2. Check ball collision with walls\r\n        // Ball movement X constraints\r\n        if (ball.pos.x > view.canvas.width - ball.width || ball.pos.x < 0) {\r\n            ball.changeXDirection();\r\n        }\r\n        // Ball movement Y constraints\r\n        if (ball.pos.y < 0) {\r\n            ball.changeYDirection();\r\n        }\r\n    };\r\n    return Collision;\r\n}());\r\nexports.Collision = Collision;\r\n\n\n//# sourceURL=webpack:///./src/Collision.ts?");

/***/ }),

/***/ "./src/assets/img/ball.png":
/*!*********************************!*\
  !*** ./src/assets/img/ball.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ball.png\";\n\n//# sourceURL=webpack:///./src/assets/img/ball.png?");

/***/ }),

/***/ "./src/assets/img/brick-blue.png":
/*!***************************************!*\
  !*** ./src/assets/img/brick-blue.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"brick-blue.png\";\n\n//# sourceURL=webpack:///./src/assets/img/brick-blue.png?");

/***/ }),

/***/ "./src/assets/img/brick-green.png":
/*!****************************************!*\
  !*** ./src/assets/img/brick-green.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"brick-green.png\";\n\n//# sourceURL=webpack:///./src/assets/img/brick-green.png?");

/***/ }),

/***/ "./src/assets/img/brick-purple.png":
/*!*****************************************!*\
  !*** ./src/assets/img/brick-purple.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"brick-purple.png\";\n\n//# sourceURL=webpack:///./src/assets/img/brick-purple.png?");

/***/ }),

/***/ "./src/assets/img/brick-red.png":
/*!**************************************!*\
  !*** ./src/assets/img/brick-red.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"brick-red.png\";\n\n//# sourceURL=webpack:///./src/assets/img/brick-red.png?");

/***/ }),

/***/ "./src/assets/img/brick-yellow.png":
/*!*****************************************!*\
  !*** ./src/assets/img/brick-yellow.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"brick-yellow.png\";\n\n//# sourceURL=webpack:///./src/assets/img/brick-yellow.png?");

/***/ }),

/***/ "./src/assets/img/paddle.png":
/*!***********************************!*\
  !*** ./src/assets/img/paddle.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"paddle.png\";\n\n//# sourceURL=webpack:///./src/assets/img/paddle.png?");

/***/ }),

/***/ "./src/assets/sprites/Ball.ts":
/*!************************************!*\
  !*** ./src/assets/sprites/Ball.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Ball = void 0;\r\nvar Ball = /** @class */ (function () {\r\n    function Ball(speed, ballSize, position, image) {\r\n        this.ballSize = ballSize;\r\n        this.position = position;\r\n        this.ballImage = new Image();\r\n        this.ballSize = ballSize;\r\n        this.position = position;\r\n        this.speed = {\r\n            x: speed,\r\n            y: -speed\r\n        };\r\n        this.ballImage.src = image;\r\n    }\r\n    Object.defineProperty(Ball.prototype, \"width\", {\r\n        // Getters\r\n        get: function () {\r\n            return this.ballSize;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Ball.prototype, \"height\", {\r\n        get: function () {\r\n            return this.ballSize;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Ball.prototype, \"pos\", {\r\n        get: function () {\r\n            return this.position;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Ball.prototype, \"image\", {\r\n        get: function () {\r\n            return this.ballImage;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    // Methods\r\n    Ball.prototype.changeYDirection = function () {\r\n        this.speed.y = -this.speed.y;\r\n    };\r\n    Ball.prototype.changeXDirection = function () {\r\n        this.speed.x = -this.speed.x;\r\n    };\r\n    Ball.prototype.moveBall = function () {\r\n        this.pos.x += this.speed.x;\r\n        this.pos.y += this.speed.y;\r\n    };\r\n    return Ball;\r\n}());\r\nexports.Ball = Ball;\r\n\n\n//# sourceURL=webpack:///./src/assets/sprites/Ball.ts?");

/***/ }),

/***/ "./src/assets/sprites/Brick.ts":
/*!*************************************!*\
  !*** ./src/assets/sprites/Brick.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Brick = void 0;\r\nvar Brick = /** @class */ (function () {\r\n    function Brick(brickWidth, brickHeight, position, brickEnergy, image) {\r\n        this.brickWidth = brickWidth;\r\n        this.brickHeight = brickHeight;\r\n        this.position = position;\r\n        this.brickEnergy = brickEnergy;\r\n        this.brickImage = new Image();\r\n        this.brickWidth = brickWidth;\r\n        this.brickHeight = brickHeight;\r\n        this.position = position;\r\n        this.brickEnergy = brickEnergy;\r\n        this.brickImage.src = image;\r\n    }\r\n    Object.defineProperty(Brick.prototype, \"width\", {\r\n        // Getters\r\n        get: function () {\r\n            return this.brickWidth;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Brick.prototype, \"height\", {\r\n        get: function () {\r\n            return this.brickHeight;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Brick.prototype, \"pos\", {\r\n        get: function () {\r\n            return this.position;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Brick.prototype, \"image\", {\r\n        get: function () {\r\n            return this.brickImage;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Brick.prototype, \"energy\", {\r\n        get: function () {\r\n            return this.brickEnergy;\r\n        },\r\n        // Setter\r\n        set: function (energy) {\r\n            this.brickEnergy = energy;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    return Brick;\r\n}());\r\nexports.Brick = Brick;\r\n\n\n//# sourceURL=webpack:///./src/assets/sprites/Brick.ts?");

/***/ }),

/***/ "./src/assets/sprites/Paddle.ts":
/*!**************************************!*\
  !*** ./src/assets/sprites/Paddle.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Paddle = void 0;\r\nvar Paddle = /** @class */ (function () {\r\n    function Paddle(speed, paddleWidth, paddleHeight, position, image) {\r\n        var _this = this;\r\n        this.speed = speed;\r\n        this.paddleWidth = paddleWidth;\r\n        this.paddleHeight = paddleHeight;\r\n        this.position = position;\r\n        this.paddleImage = new Image();\r\n        this.handleKeyUp = function (e) {\r\n            if (e.code === 'ArrowLeft' || e.key === 'ArrowLeft')\r\n                _this.moveLeft = false;\r\n            if (e.code === 'ArrowRight' || e.key === 'ArrowRight')\r\n                _this.moveRight = false;\r\n        };\r\n        this.handleKeyDown = function (e) {\r\n            if (e.code === 'ArrowLeft' || e.key === 'ArrowLeft')\r\n                _this.moveLeft = true;\r\n            if (e.code === 'ArrowRight' || e.key === 'ArrowRight')\r\n                _this.moveRight = true;\r\n        };\r\n        this.speed = speed;\r\n        this.paddleWidth = paddleWidth;\r\n        this.paddleHeight = paddleHeight;\r\n        this.position = position;\r\n        this.moveLeft = false;\r\n        this.moveRight = false;\r\n        this.paddleImage.src = image;\r\n        // Event Listeners\r\n        document.addEventListener('keydown', this.handleKeyDown);\r\n        document.addEventListener('keyup', this.handleKeyUp);\r\n    }\r\n    Object.defineProperty(Paddle.prototype, \"width\", {\r\n        // Getters\r\n        get: function () {\r\n            return this.paddleWidth;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Paddle.prototype, \"height\", {\r\n        get: function () {\r\n            return this.paddleHeight;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Paddle.prototype, \"pos\", {\r\n        get: function () {\r\n            return this.position;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Paddle.prototype, \"image\", {\r\n        get: function () {\r\n            return this.paddleImage;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Paddle.prototype, \"isMovingLeft\", {\r\n        get: function () {\r\n            return this.moveLeft;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Paddle.prototype, \"isMovingRight\", {\r\n        get: function () {\r\n            return this.moveRight;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Paddle.prototype.movePaddle = function () {\r\n        if (this.moveLeft)\r\n            this.pos.x -= this.speed;\r\n        if (this.moveRight)\r\n            this.pos.x += this.speed;\r\n    };\r\n    return Paddle;\r\n}());\r\nexports.Paddle = Paddle;\r\n\n\n//# sourceURL=webpack:///./src/assets/sprites/Paddle.ts?");

/***/ }),

/***/ "./src/assets/view/CanvasView.ts":
/*!***************************************!*\
  !*** ./src/assets/view/CanvasView.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CanvasView = void 0;\r\nvar CanvasView = /** @class */ (function () {\r\n    function CanvasView(canvasName) {\r\n        this.canvas = document.querySelector(canvasName);\r\n        this.context = this.canvas.getContext('2d');\r\n        this.scoreDisplay = document.querySelector('#score');\r\n        this.start = document.querySelector('#start');\r\n        this.info = document.querySelector('#info');\r\n    }\r\n    CanvasView.prototype.clear = function () {\r\n        var _a;\r\n        (_a = this.context) === null || _a === void 0 ? void 0 : _a.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n    };\r\n    CanvasView.prototype.initStartButton = function (startFunction) {\r\n        var _this = this;\r\n        var _a;\r\n        (_a = this.start) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return startFunction(_this); });\r\n    };\r\n    CanvasView.prototype.drawScore = function (score) {\r\n        if (this.scoreDisplay)\r\n            this.scoreDisplay.innerHTML = score.toString();\r\n    };\r\n    CanvasView.prototype.drawInfo = function (text) {\r\n        if (this.info)\r\n            this.info.innerHTML = text;\r\n    };\r\n    CanvasView.prototype.drawSprite = function (brick) {\r\n        var _a;\r\n        if (!brick)\r\n            return;\r\n        (_a = this.context) === null || _a === void 0 ? void 0 : _a.drawImage(brick.image, brick.pos.x, brick.pos.y, brick.width, brick.height);\r\n    };\r\n    CanvasView.prototype.drawBricks = function (bricks) {\r\n        var _this = this;\r\n        bricks.forEach(function (brick) { return _this.drawSprite(brick); });\r\n    };\r\n    return CanvasView;\r\n}());\r\nexports.CanvasView = CanvasView;\r\n\n\n//# sourceURL=webpack:///./src/assets/view/CanvasView.ts?");

/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/index.scss?");

/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from) {\r\n    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)\r\n        to[j] = from[i];\r\n    return to;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.createBricks = void 0;\r\nvar Brick_1 = __webpack_require__(/*! ./assets/sprites/Brick */ \"./src/assets/sprites/Brick.ts\");\r\nvar setup_1 = __webpack_require__(/*! ./setup */ \"./src/setup.ts\");\r\nfunction createBricks() {\r\n    return setup_1.LEVEL.reduce(function (ack, element, i) {\r\n        var row = Math.floor((i + 1) / setup_1.STAGE_COLS);\r\n        var col = i % setup_1.STAGE_COLS;\r\n        var x = setup_1.STAGE_PADDING + col * (setup_1.BRICK_WIDTH + setup_1.BRICK_PADDING);\r\n        var y = setup_1.STAGE_PADDING + row * (setup_1.BRICK_HEIGHT + setup_1.BRICK_PADDING);\r\n        if (element === 0)\r\n            return ack;\r\n        return __spreadArray(__spreadArray([], ack), [\r\n            new Brick_1.Brick(setup_1.BRICK_WIDTH, setup_1.BRICK_HEIGHT, { x: x, y: y }, setup_1.BRICK_ENERGY[element], setup_1.BRICK_IMAGES[element])\r\n        ]);\r\n    }, []);\r\n}\r\nexports.createBricks = createBricks;\r\n\n\n//# sourceURL=webpack:///./src/helpers.ts?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n__webpack_require__(/*! ./css/index.scss */ \"./src/css/index.scss\");\n\nvar CanvasView_1 = __webpack_require__(/*! ./assets/view/CanvasView */ \"./src/assets/view/CanvasView.ts\");\n\nvar Ball_1 = __webpack_require__(/*! ./assets/sprites/Ball */ \"./src/assets/sprites/Ball.ts\");\n\nvar Paddle_1 = __webpack_require__(/*! ./assets/sprites/Paddle */ \"./src/assets/sprites/Paddle.ts\");\n\nvar Collision_1 = __webpack_require__(/*! ./Collision */ \"./src/Collision.ts\"); // Images\n\n\nvar paddle_png_1 = __importDefault(__webpack_require__(/*! ./assets/img/paddle.png */ \"./src/assets/img/paddle.png\"));\n\nvar ball_png_1 = __importDefault(__webpack_require__(/*! ./assets/img/ball.png */ \"./src/assets/img/ball.png\")); // Level and colors\n\n\nvar setup_1 = __webpack_require__(/*! ./setup */ \"./src/setup.ts\"); // Helpers\n\n\nvar helpers_1 = __webpack_require__(/*! ./helpers */ \"./src/helpers.ts\");\n\nvar gameOver = false;\nvar score = 0;\n\nfunction setGameOver(view) {\n  view.drawInfo('Game Over!');\n  gameOver = false;\n}\n\nfunction setGameWin(view) {\n  view.drawInfo('Game Won!');\n  gameOver = false;\n}\n\nfunction gameLoop(view, bricks, paddle, ball, collision) {\n  console.log('draw!');\n  view.clear();\n  view.drawBricks(bricks);\n  view.drawSprite(paddle);\n  view.drawSprite(ball); // Move Ball\n\n  ball.moveBall(); // Move paddle and check so it won't exit the playfield\n\n  if (paddle.isMovingLeft && paddle.pos.x > 0 || paddle.isMovingRight && paddle.pos.x < view.canvas.width - paddle.width) {\n    paddle.movePaddle();\n  }\n\n  collision.checkBallCollision(ball, paddle, view);\n  var collidingBrick = collision.isCollidingBricks(ball, bricks);\n\n  if (collidingBrick) {\n    score += 1;\n    view.drawScore(score);\n  } // Game Over when ball leaves playField\n\n\n  if (ball.pos.y > view.canvas.height) gameOver = true; // If game won, set gameOver and display win\n\n  if (bricks.length === 0) return setGameWin(view); // Return if gameover and don't run the requestAnimationFrame\n\n  if (gameOver) return setGameOver(view);\n  requestAnimationFrame(function () {\n    return gameLoop(view, bricks, paddle, ball, collision);\n  });\n}\n\nfunction startGame(view) {\n  // Reset displays\n  score = 0;\n  view.drawInfo('');\n  view.drawScore(0); // Create a collision instance\n\n  var collision = new Collision_1.Collision(); // Create all bricks\n\n  var bricks = helpers_1.createBricks(); // Create a Ball\n\n  var ball = new Ball_1.Ball(setup_1.BALL_SPEED, setup_1.BALL_SIZE, {\n    x: setup_1.BALL_STARTX,\n    y: setup_1.BALL_STARTY\n  }, ball_png_1[\"default\"]); // Create a Paddle\n\n  var paddle = new Paddle_1.Paddle(setup_1.PADDLE_SPEED, setup_1.PADDLE_WIDTH, setup_1.PADDLE_HEIGHT, {\n    x: setup_1.PADDLE_STARTX,\n    y: view.canvas.height - setup_1.PADDLE_HEIGHT - 5\n  }, paddle_png_1[\"default\"]);\n  gameLoop(view, bricks, paddle, ball, collision);\n} // Create a new view\n\n\nvar view = new CanvasView_1.CanvasView('#playField');\nview.initStartButton(startGame);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/setup.ts":
/*!**********************!*\
  !*** ./src/setup.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.LEVEL = exports.BRICK_ENERGY = exports.BRICK_IMAGES = exports.BALL_STARTY = exports.BALL_STARTX = exports.BALL_SIZE = exports.BALL_SPEED = exports.PADDLE_SPEED = exports.PADDLE_STARTX = exports.PADDLE_HEIGHT = exports.PADDLE_WIDTH = exports.BRICK_HEIGHT = exports.BRICK_WIDTH = exports.BRICK_PADDING = exports.STAGE_COLS = exports.STAGE_ROWS = exports.STAGE_PADDING = void 0;\r\nvar brick_red_png_1 = __importDefault(__webpack_require__(/*! ./assets/img/brick-red.png */ \"./src/assets/img/brick-red.png\"));\r\nvar brick_blue_png_1 = __importDefault(__webpack_require__(/*! ./assets/img/brick-blue.png */ \"./src/assets/img/brick-blue.png\"));\r\nvar brick_green_png_1 = __importDefault(__webpack_require__(/*! ./assets/img/brick-green.png */ \"./src/assets/img/brick-green.png\"));\r\nvar brick_yellow_png_1 = __importDefault(__webpack_require__(/*! ./assets/img/brick-yellow.png */ \"./src/assets/img/brick-yellow.png\"));\r\nvar brick_purple_png_1 = __importDefault(__webpack_require__(/*! ./assets/img/brick-purple.png */ \"./src/assets/img/brick-purple.png\"));\r\n// Grab the canvas element for calculating the brick width\r\n// depending on canvas width\r\nvar canvas = document.querySelector('#playField');\r\n// Constants\r\nexports.STAGE_PADDING = 10;\r\nexports.STAGE_ROWS = 20;\r\nexports.STAGE_COLS = 10;\r\nexports.BRICK_PADDING = 5;\r\nexports.BRICK_WIDTH = canvas\r\n    ? Math.floor((canvas.width - exports.STAGE_PADDING * 2) / exports.STAGE_COLS) - exports.BRICK_PADDING\r\n    : 100;\r\nexports.BRICK_HEIGHT = canvas\r\n    ? Math.floor((canvas.height - exports.STAGE_PADDING * 2) / exports.STAGE_ROWS) - exports.BRICK_PADDING\r\n    : 30;\r\nexports.PADDLE_WIDTH = 150;\r\nexports.PADDLE_HEIGHT = 25;\r\nexports.PADDLE_STARTX = 450;\r\nexports.PADDLE_SPEED = 10;\r\nexports.BALL_SPEED = 5;\r\nexports.BALL_SIZE = 20;\r\nexports.BALL_STARTX = 500;\r\nexports.BALL_STARTY = 400;\r\nexports.BRICK_IMAGES = {\r\n    1: brick_red_png_1.default,\r\n    2: brick_green_png_1.default,\r\n    3: brick_yellow_png_1.default,\r\n    4: brick_blue_png_1.default,\r\n    5: brick_purple_png_1.default\r\n};\r\nexports.BRICK_ENERGY = {\r\n    1: 1,\r\n    2: 1,\r\n    3: 2,\r\n    4: 2,\r\n    5: 3 // Purple brick\r\n};\r\n// prettier-ignore\r\nexports.LEVEL = [\r\n    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\r\n    0, 0, 1, 1, 1, 1, 1, 1, 0, 0,\r\n    0, 2, 2, 2, 2, 2, 2, 2, 2, 0,\r\n    0, 3, 3, 3, 3, 3, 3, 3, 3, 0,\r\n    0, 0, 4, 4, 4, 4, 4, 4, 0, 0,\r\n    0, 0, 5, 5, 0, 0, 5, 5, 0, 0,\r\n];\r\n\n\n//# sourceURL=webpack:///./src/setup.ts?");

/***/ })

/******/ });
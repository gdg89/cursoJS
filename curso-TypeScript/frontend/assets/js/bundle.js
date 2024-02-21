/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/video-player-exercise/video-player.ts":
/*!***************************************************!*\
  !*** ./src/video-player-exercise/video-player.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class VideoPlayer {
    constructor(videoPlayerElements) {
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.controls = videoPlayerElements.controls;
        this.playButton = videoPlayerElements.playButton;
        this.stopButton = videoPlayerElements.stopButton;
        this.rwdButton = videoPlayerElements.rwdButton;
        this.fwdButton = videoPlayerElements.fwdButton;
        this.timerWrapper = videoPlayerElements.timerWrapper;
        this.timer = videoPlayerElements.timer;
        this.timerBar = videoPlayerElements.timerBar;
    }
    initCustomControls() {
        this.videoPlayer.removeAttribute('controls');
        this.controls.style.visibility = 'visible';
    }
    initEvents() {
        this.playButton.addEventListener('click', () => {
            this.playMedia();
            this.removeFwdRwdActive();
        });
        this.stopButton.addEventListener('click', () => {
            this.stop();
            this.removeFwdRwdActive();
        });
        this.videoPlayer.addEventListener('ended', () => {
            this.stop();
        });
        this.rwdButton.addEventListener('click', () => {
            this.mediaBackward();
        });
        this.fwdButton.addEventListener('click', () => {
            this.mediaForward();
        });
        this.videoPlayer.addEventListener('timeupdate', () => {
            this.setTime();
        });
    }
    playMedia() {
        if (this.videoPlayer.paused) {
            this.playButton.setAttribute('data-icon', 'u');
            this.videoPlayer.play();
        }
        else {
            this.playButton.setAttribute('data-icon', 'P');
            this.videoPlayer.pause();
        }
    }
    stop() {
        this.videoPlayer.pause();
        this.videoPlayer.currentTime = 0;
        this.playButton.setAttribute('data-icon', 'P');
    }
    mediaBackward() {
        clearInterval(this.intervalFwd);
        this.fwdButton.classList.remove('active');
        if (this.rwdButton.classList.contains('active')) {
            this.rwdButton.classList.remove('active');
            clearInterval(this.intervalRwd);
            this.videoPlayer.play();
        }
        else {
            this.rwdButton.classList.add('active');
            this.videoPlayer.pause();
            this.intervalRwd = setInterval(() => this.windBackward(), 200);
        }
    }
    mediaForward() {
        clearInterval(this.intervalRwd);
        this.rwdButton.classList.remove('active');
        if (this.fwdButton.classList.contains('active')) {
            this.fwdButton.classList.remove('active');
            clearInterval(this.intervalFwd);
            this.videoPlayer.play();
        }
        else {
            this.fwdButton.classList.add('active');
            this.videoPlayer.pause();
            this.intervalFwd = setInterval(() => this.windForward(), 200);
        }
    }
    windBackward() {
        if (this.videoPlayer.currentTime <= 3) {
            this.rwdButton.classList.remove('active');
            clearInterval(this.intervalRwd);
            this.stop();
        }
        else {
            this.videoPlayer.currentTime -= 3;
        }
    }
    windForward() {
        if (this.videoPlayer.currentTime >= this.videoPlayer.duration - 3) {
            this.fwdButton.classList.remove('active');
            clearInterval(this.intervalFwd);
            this.stop();
        }
        else {
            this.videoPlayer.currentTime += 3;
        }
    }
    removeFwdRwdActive() {
        this.fwdButton.classList.remove('active');
        this.rwdButton.classList.remove('active');
        clearInterval(this.intervalRwd);
        clearInterval(this.intervalFwd);
    }
    setTime() {
        const minutes = Math.floor(this.videoPlayer.currentTime / 60);
        const seconds = Math.floor(this.videoPlayer.currentTime - minutes * 60);
        const minuteValue = minutes.toString().padStart(2, '0');
        const secondValue = seconds.toString().padStart(2, '0');
        const playerTime = `${minuteValue}:${secondValue}`;
        this.timer.textContent = playerTime;
        const barLength = this.timerWrapper.clientWidth *
            (this.videoPlayer.currentTime / this.videoPlayer.duration);
        this.timerBar.style.width = `${barLength}px`;
    }
}
exports["default"] = VideoPlayer;
const videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector('.video'),
    controls: document.querySelector('.controls'),
    playButton: document.querySelector('.play'),
    stopButton: document.querySelector('.stop'),
    rwdButton: document.querySelector('.rwd'),
    fwdButton: document.querySelector('.fwd'),
    timerWrapper: document.querySelector('.timer'),
    timer: document.querySelector('.timer span'),
    timerBar: document.querySelector('.timer div'),
});
videoPlayer.initCustomControls();
videoPlayer.initEvents();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!******************************!*\
  !*** ./src/webpack/index.ts ***!
  \******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../video-player-exercise/video-player */ "./src/video-player-exercise/video-player.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
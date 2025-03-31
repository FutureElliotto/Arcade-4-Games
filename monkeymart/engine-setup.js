// engine-setup.js

var is_iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var buttonHeight = 0;
var prevInnerWidth = -1;
var prevInnerHeight = -1;

function resize_game_canvas() {
    // Hack for iOS when exit from Fullscreen mode
    if (is_iOS) {
        window.scrollTo(0, 0);
    }

    var app_container = document.getElementById('app-container');
    var game_canvas = document.getElementById('canvas');
    var progress_bar_root = document.getElementById('progress-bar-root');
    var progress_bar_fg = document.getElementById('progress-bar-fg');
    var progress_bar_bg = document.getElementById('progress-bar-bg');
    var innerWidth = window.innerWidth;
    var innerHeight = window.innerHeight - buttonHeight;
    if (prevInnerWidth == innerWidth && prevInnerHeight == innerHeight) {
        return;
    }
    prevInnerWidth = innerWidth;
    prevInnerHeight = innerHeight;
    var width = 960;
    var height = 640;
    var targetRatio = width / height;
    var actualRatio = innerWidth / innerHeight;

    // Stretch
    width = innerWidth;
    height = innerHeight;

    app_container.style.width = width + "px";
    app_container.style.height = height + buttonHeight + "px";
    game_canvas.width = width;
    game_canvas.height = height;

    // Progress bar
    var bar_h = width < height ? width : height;
    progress_bar_bg.width = Math.min(Math.ceil(bar_h * 0.06 * 300 / 24), width * 0.8);
    progress_bar_bg.style.marginLeft = -progress_bar_bg.width / 2 + "px";
    progress_bar_fg.width = Math.ceil(progress_bar_bg.width * 1);
    progress_bar_fg.style.marginTop = (progress_bar_bg.width * 0) * (0) / 2 + "px";
    progress_bar_fg.style.marginLeft = -progress_bar_bg.width / 2 - progress_bar_fg.width / 2 + "px";

    progress_bar_root.style.bottom = Math.ceil(height * 0.08 + buttonHeight) + "px";
}

resize_game_canvas();
window.addEventListener('resize', resize_game_canvas, false);
window.addEventListener('orientationchange', resize_game_canvas, false);
window.addEventListener("keydown", function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
window.addEventListener('focus', resize_game_canvas, false);

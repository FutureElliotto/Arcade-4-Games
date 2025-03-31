// poki-sdk-setup.js

var data = {};
var isLoadFinished = false;
Progress.addListener(function(percentage) {
    data.percentageDone = percentage / 100;
    if (!isLoadFinished)
        if (percentage == 100 && !isLoadFinished) {
            isLoadFinished = true;
        }
});
Module['onRuntimeInitialized'] = function() {
    Module.runApp("canvas", extra_params);
};
JumpGame.startup("r2tzpy9cgrn2u4xgzc9z0zbtvxm16mby");

// engine-loader.js

var extra_params = {
    archive_location_filter: function(path) {
        return ("https://218463058-163927403382736103.preview.editmysite.com/uploads/b/139890129-297434511671085883/files/archive" + path + "");
    },
    engine_arguments: ["--verify-graphics-calls=false", ],
    custom_heap_size: 67108864,
    full_screen_container: "#canvas-container",
    disable_context_menu: true
}

Module['INITIAL_MEMORY'] = extra_params.custom_heap_size;

Module['onRuntimeInitialized'] = function() {
    Module.runApp("canvas", extra_params);
};

Module["locateFile"] = function(path, scriptDirectory) {
    // dmengine*.wasm is hardcoded in the built JS loader for WASM,
    // we need to replace it here with the correct project name.
    if (path == "dmengine.wasm" || path == "dmengine_release.wasm" || path == "dmengine_headless.wasm") {
        path = "MonkeyMart.wasm";
    }
    return scriptDirectory + path;
};

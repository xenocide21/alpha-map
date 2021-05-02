    // Retrieve remote BrowserWindow
    const {BrowserWindow} = require('electron').remote

    function init() {
        // Minimize task
        document.getElementById("min-btn").addEventListener("click", (e) => {
            var window = BrowserWindow.getFocusedWindow();
            window.minimize();
        });

        // Close app
        document.getElementById("close-btn").addEventListener("click", (e) => {
            var window = BrowserWindow.getFocusedWindow();
            window.close();
        });
    }

    document.onreadystatechange =  () => {
        if (document.readyState === "complete") {
            init();
        }
    };
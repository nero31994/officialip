// Update the playChannel function to handle DRM streams correctly
function playChannel(channel) {
    // Get the video element
    const videoElement = document.getElementById("video");

    // Initialize Shaka Player if not already initialized
    if (!window.shaka) {
        console.error("Shaka Player is not loaded.");
        return;
    }

    const player = new shaka.Player(videoElement);

    // Listen for errors
    player.addEventListener("error", onErrorEvent);

    // Handle DRM
    const drmConfig = {};
    if (channel.drm && channel.drm === "clearkey") {
        drmConfig["clearkey"] = {
            "keyId": channel.key.split(":")[0],
            "key": channel.key.split(":")[1]
        };
    }

    // Load the stream
    player.configure({
        drm: drmConfig
    });

    player.load(channel.src).then(() => {
        console.log("Stream is playing!");
    }).catch((error) => {
        console.error("Error loading the stream:", error);
    });
}

// Error handling function
function onErrorEvent(event) {
    console.error("Shaka Player error:", event);
}

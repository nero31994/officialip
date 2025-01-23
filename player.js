document.addEventListener("DOMContentLoaded", () => {
  const channelSelector = document.getElementById("channelSelector");
  const videoPlayer = document.getElementById("videoPlayer");
  const player = new shaka.Player(videoPlayer);

  // Populate the dropdown menu
  channels.forEach((channel, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = channel.name;
    channelSelector.appendChild(option);
  });

  // Load the selected channel
  channelSelector.addEventListener("change", async () => {
    const selectedChannel = channels[channelSelector.value];
    if (selectedChannel) {
      try {
        // Configure DRM if available
        if (selectedChannel.drm && selectedChannel.drm.kid && selectedChannel.drm.key) {
          player.configure({
            drm: {
              clearKeys: {
                [selectedChannel.drm.kid]: selectedChannel.drm.key,
              },
            },
          });
        }

        // Load the selected channel's stream
        await player.load(selectedChannel.url);
        console.log(`Playing: ${selectedChannel.name}`);
      } catch (error) {
        console.error("Error loading channel:", error);
        alert("Failed to load the channel. Check the console for more details.");
      }
    }
  });
});

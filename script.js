// Function to parse the ClearKey DRM key and keyId
function parseClearKey(keyString) {
    // Split the input string by ':' to separate keyId and key
    const [keyId, key] = keyString.split(':');
    
    // Return an object in the form of { keyId: key }
    return { [keyId]: key };
}

// Function to load a channel with or without DRM protection
async function loadChannel(channel) {
    try {
        if (isMP4(channel.src)) {
            // If the channel source is an MP4 file
            videoElement.src = channel.src;
            videoElement.loop = true;
            videoElement.play();
            console.log(`Loaded MP4 channel: ${channel.name}`);
        } else {
            // Handle DRM configurations for ClearKey
            if (channel.drm === 'clearkey' && channel.key) {
                const clearkeyConfig = parseClearKey(channel.key);
                // Apply the ClearKey configuration to the player
                player.configure({
                    drm: {
                        clearKeys: clearkeyConfig, // Correctly set ClearKey configuration
                    },
                });
                console.log('DRM configuration set with ClearKey');
            } else {
                player.configure({ drm: {} }); // No DRM
            }

            // Load the channel stream
            await player.load(channel.src);
            console.log(`Loaded channel: ${channel.name}`);
        }
    } catch (error) {
        console.error('Error loading channel:', error);
    }
}

// Function to check if the source is an MP4 file
function isMP4(url) {
    return url.endsWith('.mp4');
}

// Sample channels array with ClearKey DRM configuration
const channels = [
    {
        name: "BILYONARYO CHANNEL",
        src: "https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd",
        drm: "clearkey",
        key: "227ffaf09bec4a889e0e0988704d52a2:b2d0dce5c486891997c1c92ddaca2cd2"
    },
    {
        name: "TVUP",
        src: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/tvup_prd.mpd",
        drm: "clearkey",
        key: "83e813ccd4ca4837afd611037af02f63:a97c515dbcb5dcbc432bbd09d15afd41"
    },
    // You can add more channels here
];

// Initialize the Shaka Player when the DOM content is loaded
document.addEventListener('DOMContentLoaded', async () => {
    const videoElement = document.getElementById('video');
    const videoContainer = document.getElementById('video-container');
    const channelListElement = document.getElementById('channelList');

    const player = new shaka.Player(videoElement);
    const ui = new shaka.ui.Overlay(player, videoContainer, videoElement);
    const controls = ui.getControls();

    player.addEventListener('error', onErrorEvent);

    function onErrorEvent(event) {
        console.error('Error code', event.detail.code, 'object', event.detail);
    }

    function populateChannels() {
        channelListElement.innerHTML = "";
        channels.forEach((channel, index) => {
            const li = document.createElement('li');
            li.textContent = channel.name;
            li.onclick = () => {
                document.querySelectorAll('.channel-list li').forEach(el => el.classList.remove('active'));
                li.classList.add('active');
                loadChannel(channel);
            };
            channelListElement.appendChild(li);
            if (index === 0) li.click(); // Automatically click the first channel
        });
    }

    populateChannels();
});

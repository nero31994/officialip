// Initialize Shaka Player
const videoElement = document.getElementById('video');
const player = new shaka.Player(videoElement);

// Get the channel list element
const channelList = document.getElementById('channelList');

// Populate the channel list dynamically from the channels.js array
function loadChannels() {
    channels.forEach((channel, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = channel.name;
        listItem.addEventListener('click', () => playChannel(channel, listItem));
        channelList.appendChild(listItem);
    });
}

// Play selected channel
function playChannel(channel, listItem) {
    // Reset active state
    const allItems = document.querySelectorAll('.channel-list li');
    allItems.forEach(item => item.classList.remove('active'));

    // Add active class to selected channel
    listItem.classList.add('active');

    // Handle DRM if needed
    if (channel.drm === 'clearkey') {
        const clearkeyKey = channel.key.split(':');
        const clearkeyLicense = {
            'clearkey': {
                [clearkeyKey[0]]: clearkeyKey[1],
            },
        };
        player.configure({ drm: clearkeyLicense });
    }

    // Load the video source
    player.load(channel.src)
        .then(() => {
            console.log('Channel is playing:', channel.name);
        })
        .catch(error => {
            console.error('Error loading the channel:', error);
        });
}

// Search channels based on input
function searchChannels() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('.channel-list li');
    items.forEach(item => {
        const name = item.textContent.toLowerCase();
        if (name.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Call the function to load channels on page load
loadChannels();

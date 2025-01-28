function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
}

const channels = [
    { name: "W-SPORT", src: "https://cdn09jtedge.indihometv.com/joss/133/paramount/index.m3u8", drm: "" },
    { name: "WWE NETWORK", src: "https://d2p372oxiwmcn1.cloudfront.net/hls/360p/playlist.m3u8", drm: "" },
    { name: "BILLIARD TV", src: "https://9769bd6405b245ea9adca1889a0b491b.mediatailor.us-east-1.amazonaws.com/v1/master/f4e8c53a8367a5b58e20ce054ea3ce25a3e904d3/Samsung-in_BilliardTV/playlist.m3u8", drm: "" },
    { name: "GAME+", src: "https://a-cdn.klowdtv.com/live2/fntsy_720p/playlist.m3u8", drm: "" },
    { name: "ESR", src: "https://eyeonesports.com/ES2RA-628g.m3u8", drm: "" }
];

document.addEventListener('DOMContentLoaded', async () => {
    const videoElement = document.getElementById('video');
    const channelListElement = document.getElementById('channelList');

    // Initialize Shaka Player
    const player = new shaka.Player(videoElement);

    // Error handling
    player.addEventListener('error', (event) => {
        console.error('Error code', event.detail.code, 'object', event.detail);
    });

    async function loadChannel(channel) {
        try {
            // Handle MP4 videos directly
            if (channel.src.endsWith('.mp4')) {
                videoElement.src = channel.src;
                videoElement.play();
                console.log(`Loaded MP4 channel: ${channel.name}`);
            } else {
                // Configure and load for non-MP4 streams
                await player.load(channel.src);
                console.log(`Loaded channel: ${channel.name}`);
            }
        } catch (error) {
            console.error('Error loading channel:', error);
        }
    }

    function populateChannels() {
        channels.forEach((channel, index) => {
            const li = document.createElement('li');
            li.textContent = channel.name;
            li.onclick = () => {
                document.querySelectorAll('.channel-list li').forEach(el => el.classList.remove('active'));
                li.classList.add('active');
                loadChannel(channel);
            };
            channelListElement.appendChild(li);
            if (index === 0) li.click();
        });
    }

    populateChannels();

    // Search functionality
    window.searchChannels = () => {
        const query = document.getElementById('searchInput').value.toLowerCase();
        document.querySelectorAll('.channel-list li').forEach((li) => {
            li.style.display = li.textContent.toLowerCase().includes(query) ? '' : 'none';
        });
    };
});

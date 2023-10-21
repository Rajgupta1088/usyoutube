const ytpl = require('ytpl');

const yt_playlist_urls = async (youtubeUrl) => {
    try {
        const playlistIdMatch = youtubeUrl.match(/list=([A-Za-z0-9_-]+)/);
        if (!playlistIdMatch) {
            console.error('No playlist ID found in the URL.');
            return [];
        }

        const playlistId = playlistIdMatch[1];
        const playlistInfo = await ytpl(playlistId);
        const videoUrls = playlistInfo.items.map((video) => `https://www.youtube.com/watch?v=${video.id}`);
        return videoUrls;
    } catch (error) {
        console.error('Error fetching playlist information:', error);
        return [];
    }
}

module.exports = yt_playlist_urls;

const ytdl = require('ytdl-core');

// Replace this with the YouTube URL you want to download
// const youtubeUrl = 'https://www.youtube.com/watch?v=JVmWmYsNdIw&ab_channel=PRATIKJAINvlogs';

// Function to get the video, audio, and thumbnail URLs
const getDownloadUrls = async (youtubeUrl) => {
    try {
        // Fetch video information
        const videoInfo = await ytdl.getInfo(youtubeUrl);
        const title = videoInfo.videoDetails.title;

        // Get video download URL
        const v_url_720 = v_url_360 = ytdl.chooseFormat(videoInfo.formats, { quality: 'highest' }).url;

        // Get audio download URL
        const audioFormat = ytdl.filterFormats(videoInfo.formats, 'audioonly')[0];
        const audio = audioFormat.url;

        // Get thumbnail URL
        const thumbnail = '';
        const api = 'youtube';
        // videoInfo.videoDetails.thumbnail.thumbnails.pop().url;

        return {

            v_url_360,
            v_url_720,
            thumbnail,
            title,
            audio,
            api
        };
    } catch (error) {
        console.error('Error fetching download URLs:', error.message);
        return null;
    }
}

module.exports = getDownloadUrls;

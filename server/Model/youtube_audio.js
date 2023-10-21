const ytdl = require('ytdl-core');

const youtube_audio = async (videoUrl) => {
    try {
        const videoInfo = await ytdl.getInfo(youtubeUrl);
        const audioFormat = ytdl.filterFormats(videoInfo.formats, 'audioonly')[0];

        return {
            audioFormat
        };
    } catch (error) {
        console.error('Error fetching download URLs:', error.message);
        return null;
    }
}
module.exports = youtube_audio;

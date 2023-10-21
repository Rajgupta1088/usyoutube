const fbDownloader = require('@xaviabot/fb-downloader');

// URL of the Facebook video you want to download

const getFacebookUrls = async (videoUrl) => {
    try {
        // Download the video
        fbDownloader(videoUrl)
            .then((downloadedVideoUrl) => {
                // Do something with the downloaded video data
                console.log('Video downloaded:', downloadedVideoUrl);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        return {
            downloadedVideoUrl,
        };
    } catch (error) {
        console.error('Error fetching download URLs:', error.message);
        return null;
    }
}

module.exports = getFacebookUrls;

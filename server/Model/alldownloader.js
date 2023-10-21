const axios = require('axios');

const allDownloader = async (videoUrl) => {
    const options = {
        method: 'GET',
        url: 'https://social-media-video-downloader.p.rapidapi.com/api/getSocialVideo',
        params: {
            url: 'GymgoPJsBwg'
        },
        headers: {
            'X-RapidAPI-Key': 'f1b55675abmsh89086b8f617a979p1cbe72jsnce388aa9fa14',
            'X-RapidAPI-Host': 'social-media-video-downloader.p.rapidapi.com'
        }
    };
    try {
        // Download the video
        console.log(videoUrl);
        const response = await axios.request(options);
        v_url_360 = response.data.links[0].url;
        v_url_720 = response.data.links[1].url;
        thumbnail = response.data.picture;
        title = response.data.description;
        api = 'All';

        return {
            v_url_360,
            v_url_720,
            thumbnail,
            title,
            api
        };

    } catch (error) {
        console.error('Error fetching download URLs:', error.message);
        return null;
    }
}

module.exports = allDownloader;

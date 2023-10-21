const router = require('express').Router();
const alldownloader = require('../Model/alldownloader');
const ytdownload = require('../Model/youtube_dl');
const facebook_dl = require('../Model/facebook_dl');
const instagram_dl = require('../Model/instagram_dl');
const youtube_audio = require('../Model/youtube_audio');
const youtube_playlist = require('../Model/youtube_playlist');

router.post("/", async (req, res) => {

    try {

        const yt_url = req.body.url;
        const plateform = req.body.type;

        if (plateform == 'YouTube') {
            const response = await alldownloader(yt_url);
            const audio = await youtube_audio(yt_url);
            if (response != null) {
                return res.status(200).send({ status: '200', video_details: response, audio: audio });
            }

            if (response == null) {
                const video_detail = await ytdownload(yt_url);
                return res.status(200).send({ status: '200', video_details: video_detail, audio: audio });
            }
            else {
                return res.status(403).send({ status: '403', msg: 'Url Is Private' });
            }
        }

        if (plateform == 'Instagram') {
            const response = await alldownloader(yt_url);
            if (response != null) {
                return res.status(200).send({ status: '200', video_details: response });
            }
            if (response == null) {
                const video_detail = await instagram_dl(yt_url);
                return res.status(200).send({ status: '200', video_details: video_detail });
            }
            else {
                return res.status(403).send({ status: '403', msg: 'Url Is Private' });
            }
        }

        if (plateform == 'Facebook') {
            const response = await alldownloader(yt_url);
            if (response != null) {
                return res.status(200).send({ status: '200', video_details: response });
            }

            if (response == null) {
                const video_detail = await facebook_dl(yt_url);
                return res.status(200).send({ status: '200', video_details: video_detail });
            }
            else {
                return res.status(403).send({ status: '403', msg: 'Url Is Private' });
            }
        }

        if (plateform == 'Youtube_Playlist') {
            const videoUrls = await youtube_playlist(yt_url);
            const playlist = [];
            var i = 0;
            while (i < 2) {
                const response = await alldownloader(videoUrls[i]);
                playlist[i] = response;
                i = i + 1;
            }
            if (playlist)
                return res.status(200).send({ status: '200', video_details: playlist });
            else
                return res.status(403).send({ status: '403', msg: "URL Is Private" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;
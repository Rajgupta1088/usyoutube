// const puppeteer = require('puppeteer');

// const getInstagramUrls = async (reelUrl) => {
//     try {
//         const browser = await puppeteer.launch({ headless: 'new' }); // Use the new headless mode
//         const page = await browser.newPage();

//         await page.goto(reelUrl);

//         // Wait for the Reel video to load (You may need to adjust the selector)
//         await page.waitForSelector('video');

//         // Get the video element source URL
//         const videoElement = await page.$('video');
//         const videoSource = await videoElement.getProperty('src');
//         const videoSourceUrl = await videoSource.jsonValue();

//         console.log('Reel Video URL:', videoSourceUrl);

//         // Capture the Reel thumbnail URL
//         const thumbnailUrl = await page.evaluate(() => {
//             const thumbnailElement = document.querySelector('img');
//             return thumbnailElement ? thumbnailElement.getAttribute('src') : null;
//         });

//         console.log('Reel Thumbnail URL:', thumbnailUrl);

//         // Close the browser
//         await browser.close();
//         return {
//             videoSourceUrl,
//             thumbnailUrl,
//         };

//     } catch (error) {
//         console.error('Error fetching download URLs:', error.message);
//         return null;
//     }
// }

// module.exports = getInstagramUrls;

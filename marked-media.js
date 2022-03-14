export default function (resourceUrl) {
    const renderer = {
        image(href, title, text) {
            let mediaAttr = {
                controls: true,
                autoplay: false,
                muted: false,
                title: null,
                text: null,
                width: null,
                height: null,
                accelerometer: false,
                "clipboard-write": false,
                "encrypted-media": false,
                gyroscope: false,
                "picture-in-picture": false,
                allowfullscreen: false,
            };

            let titleObj = {};

            if (!!title) {
                title.split(",").forEach(element => {
                    let object = element.split(":");
                    titleObj[object[0]] = object.length == 2 ? object[1] : true;
                });
            }

            mediaAttr = { ...mediaAttr, ...titleObj };

            switch (titleObj.type) {
                case 'wav':
                    let controls = mediaAttr.controls ? ' controls' : '';
                    let autoplay = mediaAttr.autoplay ? ' autoplay' : '';
                    let muted = mediaAttr.muted ? ' muted' : '';
                    return `<audio alt='${text}'${controls}${autoplay}${muted}><source src='${resourceUrl}${href}' type='audio/wav'></audio>`;
                case 'youtube':
                    let width = mediaAttr.width != null ? ` width='${mediaAttr.width}'` : '';
                    let height = mediaAttr.height != null ? ` height='${mediaAttr.height}'` : '';
                    let accelerometer = mediaAttr.accelerometer ? 'accelerometer;' : '';
                    let youtubeAutoplay = mediaAttr.autoplay ? 'autoplay;' : '';
                    let clipboardWrite = mediaAttr["clipboard-write"] ? 'clipboard-write;' : '';
                    let encryptedMedia = mediaAttr["encrypted-media"] ? 'encrypted-media;' : '';
                    let gyroscope = mediaAttr.gyroscope ? 'gyroscore;' : ''
                    let pictureInPicture = mediaAttr["picture-in-picture"] ? 'picture-in-picture;' : '';
                    let allowfullscreen = mediaAttr.allowfullscreen ? 'allowfullscreen' : '';
                    return `<iframe${width}${height} src='https://www.youtube.com/embed/${href}' title='YouTube video player' frameborder='0' allow='${accelerometer}${youtubeAutoplay}${clipboardWrite}${encryptedMedia}${gyroscope}${pictureInPicture}' ${allowfullscreen}></iframe>`
                default:
                    let style = mediaAttr.width != null ? ` style='width:${mediaAttr.width}'` : '';
                    let title = mediaAttr.title != null ? ` title='${mediaAttr.title}'` : '';
                    let alt = mediaAttr.alt != null ? ` alt='${mediaAttr.text}'` : '';
                    return `<img src='${resourceUrl}${href}'${style}${title}${alt}></img>`;
            }
        }
    }
    return { renderer };
}
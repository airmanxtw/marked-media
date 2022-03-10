export default function (resourceUrl) {
    const renderer = {
        image(href, title, text) {
            let mediaAttr = {
                controls: true,
                autoplay: false,
                muted: false,
                title: null,
                text: null,
                width: null
            };

            let titleObj = {};

            if (!!title) {
                title.split(",").forEach(element => {
                    let object = element.split(":");
                    titleObj[object[0]] = object[1];
                });
            }

            mediaAttr = { ...mediaAttr, ...titleObj };

            switch (titleObj.type) {
                case 'wav':
                    let controls = mediaAttr.controls ? ' controls' : '';
                    let autoplay = mediaAttr.autoplay ? ' autoplay' : '';
                    let muted = mediaAttr.muted ? ' muted' : '';
                    return `<audio alt='${text}'${controls}${autoplay}${muted}><source src='${resourceUrl}${href}' type='audio/wav'></audio>`;
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
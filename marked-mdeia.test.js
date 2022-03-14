const { marked } = require("marked");
import markedMedia from "./marked-media";

const { renderer } = markedMedia("http://example.com/media/");
marked.use({ renderer });

test('test img', () => {
    expect(marked.parseInline("![](1 'width:300px,title:test img')"))
    .toEqual("<img src='http://example.com/media/1' style='width:300px' title='test img'></img>");
});

test('test wav',()=>{
    expect(marked.parseInline("![this is audio](1 'type:wav,controls,autoplay,muted')"))
    .toEqual("<audio alt='this is audio' controls autoplay muted><source src='http://example.com/media/1' type='audio/wav'></audio>");
})

test('test youtube',() => {
    expect(marked.parseInline("![](PB4gId2mPNc 'type:youtube,width:560,height:315,accelerometer,autoplay,clipboard-write,allowfullscreen')"))
    .toEqual("<iframe width='560' height='315' src='https://www.youtube.com/embed/PB4gId2mPNc' title='YouTube video player' frameborder='0' allow='accelerometer;autoplay;clipboard-write;' allowfullscreen></iframe>");
});



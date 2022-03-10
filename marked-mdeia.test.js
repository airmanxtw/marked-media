const { marked } = require("marked");
import markedMedia from "./marked-media";

const { renderer } = markedMedia("http://example.com/media/");
marked.use({ renderer });

test('test img', () => {
    expect(marked.parseInline("![](1)")).toEqual("<img src='http://example.com/media/1'></img>");
});

test('test wav',()=>{
    expect(marked.parseInline("![](1 'type:wav')")).toEqual("<audio alt='' controls><source src='http://example.com/media/1' type='audio/wav'></audio>");
})



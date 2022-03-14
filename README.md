# usage
```javascript
import { marked } = from "marked";
import markedMedia from "marked-media";
const { renderer } = markedMedia("http://example.com/media/");
marked.use({ renderer });
```

# example 1
```javascript
marked.parseInline("![](1 'width:300px,title:test img')")
```
generates:  
```<img src='http://example.com/media/1' style='width:300px' title='test img'></img>```  

# example 2
```javascript
marked.parseInline("![this is audio](1 'type:wav,controls,autoplay,muted')")
```
generates:   
```<audio alt='this is audio' controls><source src='http://example.com/media/1' type='audio/wav'></audio>```  

# example 3
```javascript
marked.parseInline("![](PB4gId2mPNc 'type:youtube,width:560,height:315,accelerometer,autoplay,clipboard-write,allowfullscreen')");
```
generates:  
```<iframe width='560' height='315' src='https://www.youtube.com/embed/PB4gId2mPNc' title='YouTube video player' frameborder='0' allow='accelerometer;autoplay;clipboard-write;' allowfullscreen></iframe>```  
# usage
```javascript
import { marked } = from "marked";
import markedMedia from "marked-media";
const { renderer } = markedMedia("http://example.com/media/");
marked.use({ renderer });
```

# example 1
```javascript
marked.parseInline("![](1)")
```
generates:  
```<img src='http://example.com/media/1'></img>```

# example 2
```javascript
marked.parseInline("![](1 'type:wav'")
```
generates:   
```<audio alt='' controls><source src='http://example.com/media/1' type='audio/wav'></audio>```
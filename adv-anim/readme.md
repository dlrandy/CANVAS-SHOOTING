### canvas 的应用
canvas可以用来画图，合并图片以及创建动画

### canvas 的width和height
canvas的width和height属性，同时设置的是元素的size和渲染面的size；
css设置的只是元素的size，但是canvas在渲染的时候，会缩放到元素的size。
而且css的设置不符合最初的canvas比率的话，可能渲染的画面有些扭曲。遇到
此情况尝试使用width和height解决。

###canvas的样式
canvas默认是完全透明的


###canvas的坐标系统
canvas的原点是在画布的左上角，所有的元素都是相对于这个origin存放的

###canvas的基本图形
rectangle和path， 其他的图形需要使用多个path来实现


###canvas的path
fill和stroke的不同在于fill可以自动关闭path
moveTo
lineTo
beginPath
closePath
fill
stroke
arc
arcTo
>
 radians（弧度）= (Math.PI/180)*degrees;

quadraticCurveTo(cp1x, cp1y, x, y);

bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);










https://developers.google.com/s/results/web/tools/s/results/?q=canvas
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
https://www.html5canvastutorials.com/
https://www.bitdegree.org/learn/html5-canvas-tutorial
### canvas里使用颜色
1. fillStyle
2. strokeStyle

### canvas 里实现半透明
可以使用globalAlpha或者将半透明的颜色分配给strokeStyle或者fillStyle
globalAlpha适合大量有相同透明的情况；style的设置适合单个图形的


### canvas里的path是如何绘制的
填充区域完全的占据整个像素边界的话，就能获得清晰的图像；
对于1宽度的线，坐标点坐在像素的中间位置，也就是一像素实际上占用的
是两个像素，也就会产生模糊。
若想要完整的像素，可以在坐标点+ 0.5的位置设置，这样完整的填充像素边界了。


> canvas反复绘制同一个位置,同时设置不同的位置的放射背景，会绘制不同的背景合并的效果

**canvas的fill原则**
在使用fill, clip或者isPointinPath的时候， 可以提供填充规则
原则有：
- nonzero:
    初始点为0，遇见正向的path+1,遇见逆向的path-1，为0而不填充
- evenodd:
    由一点向外延展，如果有为基数则填充，为偶数这不填充



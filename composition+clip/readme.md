默认形状总是一个在另一个上绘制的，局限于composite形状的
顺序。但是可以通过globalCompositeOperation；同时clip属性
允许隐藏形状不想要的部分。

### clip
clipping path不会绘画在canvas上，而且path不会受到新加的shape的影响。很适合
在受限的区域绘制多个形状。

绘制形状的三种方法：
stroek， fill， clip
> canvas默认的clipping path是canvas本身的size；可以使用clip来关闭path







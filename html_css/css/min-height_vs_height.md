The difference between height and min-height in CSS lies in how they determine an element's vertical dimension and their behavior in relation to content size.

height: This property sets a fixed and absolute height for an element. The element will be exactly the specified height, regardless of its content. If the content exceeds the defined height, it will overflow the element unless an overflow property is used to manage it (e.g., overflow: auto, overflow: scroll, overflow: hidden).

min-height: This property defines the minimum height an element can have. The element's height will be at least the specified min-height value. However, unlike height, min-height allows the element to grow taller if its content requires more vertical space. If the content is smaller than the min-height, the element will still maintain the min-height. If the content is larger, the element's height will expand to accommodate the content. 

In summary:
Use height when you need an element to have a precise, unchanging vertical dimension.
Use min-height when you need an element to be at least a certain height but also capable of expanding to fit its content.

```css
.fixed-height {
  height: 100px;
  background-color: lightblue;
}

.min-height-example {
  min-height: 100px;
  background-color: lightgreen;
}
```

A .fixed-height div will always be 100px tall. If its content is too large, it will overflow.
A .min-height-example div will be at least 100px tall. If its content is larger than 100px, the div will expand to contain all the content. If the content is smaller, the div will still be 100px tall.
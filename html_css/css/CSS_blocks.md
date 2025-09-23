## CSS blocks properties

```css

.example-block {
 padding: 10%;
 margin: 10px -10px;

 width: 500px;
 max-width: 500px;
 min-width: 500px;

 height: 50%;
 max-height:200px;
 min-height:200px;
}

//takes 10% from the width of the parent element
//negative margin is used widely!
//if there's no width parameter prop, block el will occupy whole width of the browser window
//max-width adjusts to the browser window width (parent)! width - doesn't
//min-width limits the width of the block el
//height in % is relative to parent - browser window

.image {
 width: 100%;
 max-width: 500px;
 min-width: 300px;
}

//<img> is a string tag but it's affected by some block tags properties

```
## CSS styles reset

```css

span.bigred {
 font-size: 16px;
 color: red;
}

<!-- 
style applies only to spans that HAVE bigred class
no spaces between tag and its class! 
has highest priority because both tag and class are used
-->



.bigred span {
 font-size: 16px;
 color: red;
}

<!-- 
style applies only to spans INSIDE bigred class
-->



<!--
<div class="block">
 <p>text 1</p>
 <p>text 2</p>

 <div>
  <p>text 3</p>
 </div>
</div>
 -->

.block>p {
 font-size: 16px;
 color: blue;
}

<!--
applying styles only to first level of <p> inside <div> - text 1 & 2
 -->


<!--text styles below-->

.decoration {
 text-decoration: underline;
 text-decoration: overline;
 text-decoration: line-through;
 text-decoration: none;
}

.shadow {
 text-shadow: 1px 1px 5px black;
}

.transform {
 text-transform: capitalize;
 text-transform: lowercase;
 text-transform: uppercase;
 text-transform: none;
}

.ident {
 text-ident: 50px;
}
//sets line indentation

.letterspacing {
 letter-spacing: 5px;
}

.wordspacing {
 word-spacing: 5px;
}

.whitespace {
 white-space: nowrap;
 white-space: normal;
}
//prohibits lines of text to wrap

.lineheight {
 line-height: 1px;
 line-height: 20px;
}

```
## Imagine HTML like a family tree:

- Descendant (` `) → anyone in the subtree
- Child (`>`) → direct child only
- Adjacent sibling (`+`) → next brother/sister only
- General sibling (`~`) → any brother/sister later
---

## Examples in action:

### Descendant (` `)
```css
.container p {
   color: blue;
}
```
-  Targets **any** `<p>` inside .container, no matter how deep.
-  Flexible but can be broad.
---


### Child (`>`)
```css
.container > p {
   color: red;
}
```
- Targets only **direct** children `<p>` of `.container`.
- More precise than descendant.
---


### Adjacent sibling (`+`)
```css
h2 + p {
   margin-top: 0;
}
```
- Only the `<p>` **immediately after an** `<h2>` gets styled.
---


### General sibling (`~`)
```css
h2 ~ p {
   color: gray;
}
```
- All `<p>` elements after an `<h2>` **in the same parent** get styled.
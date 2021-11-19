# CreateElement
Helper function to create and add DOM elements in Javascript.  

Bored to write many nodes in Javascript?  With this help function, you can shorter this code:
``` javascript
let div = document.createElement("div");
let h1 = document.createElement("h1");
h1.className = "h1css";
h1.appendChild(document.createTextNode("Hello "));
let a = document.createElement("a");
a.setAttribute("href", "mailto:me");
a.setAttribute("target", "_blank");
a.appendChild(document.createTextNode("You!"));
a.appendChild(document.createElement("br"));
a.appendChild(document.createTextNode("Me!"));
div.appendChild(h1);
div.appendChild(a);
```

to
``` javascript
let div = _CN("div");
_CN("h1", {class:"h1css"}, ["Hello "], div);
_CN("a", {href:"mailto:me", target:"_blank"}, ["You!", _CN("br"), "Me!"], div);
```
or 
``` javascript
let div = _CN("div", null , [
  _CN("h1", {class:"h1css"}, ["Hello "]),
  _CN("a", {href:"mailto:me", target:"_blank"}, ["You!", _CN("br"), "Me!"])
]);
```

Simple! Or not?

## Description
**CN** is the acronym for "CreateNode".  
As it is more a macro than a function and to see it better in the code, I added the underscore.  
So, to call this function/macro, just write `_CN(...)`
This will create an element, like the `document.createElement()` but with more functionality, like attributes, childs and parent.

## Parameters
`_CN(tag, attr, childs, baseNode) {...}` accepts 4 parameters:  

|Parameter|Type|Description|
|---|---|---|
|tag|String|...|
|attr|Object|...|
|childs|Array|...|
|baseNode|Element|...|




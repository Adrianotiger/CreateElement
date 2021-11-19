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
  _CN("a", {href:"mailto:me", target:"_blank"}, [
    "You!", 
    _CN("br"), 
    "Me!"
  ])
]);
```

Simple! Or not?

## Description
**CN** is the acronym for "CreateNode".  
As it is more a macro than a function and to see it better in the code, I added the underline.  
So, to call this function/macro, just write `_CN(...)`
This will create an element, like the `document.createElement()` but with more functionality, like attributes, childs and parent.

## Parameters
`_CN(tag, attr, childs, baseNode) {...}` accepts 4 parameters:  

|Parameter|Type|Description|
|---|---|---|
|tag|String|tag name, like "br" or "input"|
|attr|Object or null or empty|JSON object to set the attributes|
|childs|Array or null or empty|list of elements and/or strings|
|baseNode|Element or null or empty|parent node where to add the new element|

#### tag
The new tag. This will just replace
`document.createElement(tag)` with your tag.

#### attr
A JSON object with the attributes.
Example: {style:"width:10px;height:5px", class:"className", href:"https://..."}
If you don't have any attributes, you can insert `null` or not set anything.
This will add all attributes writing 
`element.setAttribute(name, value);`
``Note: className should be written with class, if set with setAttribute!``

#### childs
Array of childs or null if you don't have any.
A child can be an element or string.
Example: [_CN("br"), "text"]
Every string will be added with:
`element.appendChild(document.createTextNode(text));`
And the elements will be added with:
`element.appendChild(newElement);`

#### baseNode
Is the parent node of this new object.
If not set or if null, this new node will not be added.

## Return
The function returns an HTML element, or better, a node with attributes and child nodes.

# Install
If you just want use it, the simplest way is to copy the content of the js file as it is just a function.
You can also copy the line of the minified script and insert it to your html or project (at beginning, before you call any script):
```
function _CN(e,r,t,n){var i=document.createElement(e);if(r&&null!=r)for(var a in r)i.setAttribute(a,r[a]);if(t&&Array.isArray(t))for(var o in t)i.appendChild("string"==typeof t[o]||"number"==typeof t[o]?document.createTextNode(t[o]):t[o]);return n&&void 0!==n&&n.appendChild(i),i}
```
Or integrate it as normal script, inside your html:
```
<html>
  <head>
 ...
  <script src="cn.js"></script>
 ...
  </head>
  <body>
 ...
  </body>
</html>
```

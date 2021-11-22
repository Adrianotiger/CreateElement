/**
  * 
  * Title: CreateElement macro
  * Description: Create a DOM node and add attributes and childs. Appending it to the parent with one call. Simple and flexible.
  * @file: cn.js
 ​ * ​@author​ Adriano Petrucci
 ​ * ​@see​ <a href="https://github.com/Adrianotiger/CreateElement/" target="_blank">https://github.com/Adrianotiger/CreateElement/</a> 
*/

/**
 * Create a DOM node and add attributes, childs and append to parent with one call.
 * @param  {String}  tag  HTML5 tag, like "br" or "b" or "input". document.createElement({tag}) is called.
 * @param  {Object}  attr Tag attributes as json or null or undefined. Example: {style:"height:10px;",class:"className",href:"mailto:"}
 * @param  {Array}   childs Array of childs or null or undefined, can be a string or Element. Example: [_CN("br"),"second line"]
 * @param  {Element} baseNode  ParentNode, where you want add the new node or null or undefined.
 * @return {Element}       Return the new node created
 */
function _CN(tag, attr, childs, baseNode=null)
{
  var el = document.createElement(tag);
  if(typeof attr === 'object')
  {
    for(var a in attr)
      el.setAttribute(a, attr[a]);
  }
  if(Array.isArray(childs))
  {
    childs.forEach(child => {
      el.appendChild((typeof child === "string" || typeof child === "number") ? document.createTextNode(child) : child);
    });
  }
  if(baseNode !== null)
  {
    baseNode.appendChild(el);
  }
  return el;
}

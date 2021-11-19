// CreateNode helper function
// tag: tagname "div". Attributes: json format {name:"aaa"}. childs: array of childs, node or text. basenode: node.
/**
 * Create a DOM node and add attributes, childs and append to parent with one call.
 * @param  {String}  tag  HTML5 tag, like "br" or "b" or "input". document.createElement({tag}) is called.
 * @param  {Object}  attr Tag attributes as json or null or undefined. Example: {style:"height:10px;",class:"className",href:"mailto:"}
 * @param  {Array}   childs Array of childs or null or undefined, can be a string or Element. Example: [_CN("br"),"second line"]
 * @param  {Element} baseNode  ParentNode, where you want add the new node or null or undefined.
 * @return {Element}       Return the new node created
 */
function _CN(tag, attr, childs, baseNode)
{
  var el = document.createElement(tag);
  if(attr && attr !== null && typeof attr !== 'undefined')
  {
    for(var a in attr)
      el.setAttribute(a, attr[a]);
  }
  if(childs && Array.isArray(childs))
  {
    for(var c in childs)
      el.appendChild((typeof childs[c] === "string" || typeof childs[c] === "number") ? document.createTextNode(childs[c]) : childs[c]);
  }
  if(baseNode && typeof baseNode !== 'undefined')
  {
    baseNode.appendChild(el);
  }
  return el;
}

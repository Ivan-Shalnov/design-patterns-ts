import ElementNode from './ElementNode';
import TextNode from './TextNode';

const htmlEl = new ElementNode('html');
const headEl = new ElementNode('head');
const titleEl = new ElementNode('title');
const titleText = new TextNode('Title: Hello, World!');
const bodyEl = new ElementNode('body');
const h1El = new ElementNode('h1');
const text = new TextNode('Hello, World!');
htmlEl.add(headEl);
headEl.add(titleEl);
titleEl.add(titleText);
htmlEl.add(bodyEl);
bodyEl.add(h1El);
h1El.add(text);
console.log(htmlEl.getMarkup());

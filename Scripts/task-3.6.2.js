var div = document.querySelector('div');
var paragraph = document.createElement('p');
var text = document.createTextNode('I am the paragraph');

paragraph.appendChild ( text )
div.appendChild (paragraph)
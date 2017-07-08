document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", chrome.extension.getURL('sample-poems.json'), true);
    xhr.send();
    xhr.onload = function() {
	    var json = xhr.responseText;                         // Response
	    json = json.replace(/^[^(]*\(([\S\s]+)\);?$/, '$1'); // Turn JSONP in JSON
	    json = JSON.parse(json);                             // Parse JSON
	    
        var poem = processJSON(json);
        display(poem);
	};	
});

function processJSON(json){
    var len = json.poems.length;
    console.log(len);
    var num = Math.floor(Math.random()*len);
    console.log(num);
    console.log(json.poems[num].poem.join('<p></p>'));
    return json.poems[num].poem.join('<p></p>');
    
}

function display(poem) {
    document.getElementById('sample-poem').innerHTML = poem;
}
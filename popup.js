document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", chrome.extension.getURL('sample-poems.json'), true);
    xhr.send();
    xhr.onload = function() {
	    var json = xhr.responseText;                         // Response
	    json = json.replace(/^[^(]*\(([\S\s]+)\);?$/, '$1'); // Turn JSONP in JSON
	    json = JSON.parse(json);                             // Parse JSON
	    
        var poems = processJSON(json);
        display(poems);
	};	
});

function processJSON(json){
    var len = json.poems.length;
    var num = Math.floor(Math.random()*len);
    return json.poems[num];
    
}

function display(poems) {
    var poem = poems.poem.join('<br>');
    var title = poems.title;
    var poet = poems.poet;
    document.getElementById('title').innerHTML = title;
    document.getElementById('sample-poem').innerHTML = poem;
    document.getElementById('poet').innerHTML = poet;
}
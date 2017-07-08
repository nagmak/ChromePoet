// Listen for background message
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);

      // This line is new!
      chrome.runtime.sendMessage({"action" : "getPoems"}, function(poems) {
        // Process the data
        var poem = poems.title;
        document.getElementById("#sample-poem").innerHTML = poem;
      });

      chrome.tabs.create({url: 'chrome-poet.html'}) 
    }
  }
);
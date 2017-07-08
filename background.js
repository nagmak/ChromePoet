// Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   // Send a message to the active tab
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     var activeTab = tabs[0];
//     chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
//   });
// });

// // This block is new!
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if( request.message === "open_new_tab" ) {
//       chrome.tabs.create({"url": request.url});
//     }
//   }
// );

// Register this before opening the tab
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.action == "getPoems") {
    sendResponse(poemDataJSON); // No need to serialize yourself!
  }
});

var sendResponse = (poemDataJSON) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", chrome.extension.getURL('sample-poems.json'), true);
    xhr.send();
}
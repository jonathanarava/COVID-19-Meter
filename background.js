/*
background.js : background page (browser)

*/

console.log("Background running")   

/* 
Code to Test integration between 'popup' and 'background' (inspect view: background page)

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab) {
    console.log("button clicked")
    let msg = { txt: "hello" }
    chrome.tabs.sendMessage(tab.id, msg)
    console.log("msg sent")
}
*/
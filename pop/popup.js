window.addEventListener('load', function load(event) {
    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        tab_id = tabs[0].id;
        document.getElementById('submit_button').onclick = function() {
            console.log("button clicked")
            msg = "moreCOVID"
            chrome.tabs.sendMessage(tab_id, msg)
            console.log("msg sent")
        }

    });

});
window.addEventListener('load', function load(event) {
    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        tab_id = tabs[0].id;

        let data = {status: document.getElementById('options').value}
        console.log(status)
        chrome.tabs.sendMessage(tab_id, status)
        console.log("msg sent")
        
    
    });

});
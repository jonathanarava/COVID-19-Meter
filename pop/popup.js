var container = document.getElementById("container")

window.addEventListener('load', function load(event) {
    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        tab_id = tabs[0].id;    // current tab

        options.addEventListener("click", function(){
            let data = {status: document.getElementById('options').value}
            console.log(data.status)
            console.log(data)
            chrome.tabs.sendMessage(tab_id, data)
            console.log("msg sent")
        })

        container.addEventListener("mouseenter", function(){
            let data = {status: document.getElementById('options').value}
            console.log(data.status)
            console.log(data)
            chrome.tabs.sendMessage(tab_id, data)
            console.log("msg sent")
        })
        

    });

});
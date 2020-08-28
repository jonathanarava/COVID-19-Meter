/*
popup.js : popup page.

*/

window.addEventListener('load', function load(event) {
    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        tab_id = tabs[0].id;    // current tab.

        // Listens for selection on slidebar (i.e. more/ less COVID-19).
        options.addEventListener("click", function(){
            let data = {status: document.getElementById('options').value}
            console.log(data.status)
            console.log(data)
            chrome.tabs.sendMessage(tab_id, data)   // sends user selected preference to 'content.js'.
            console.log("msg sent")
        })
    
        // MIN: hover description
        MIN.addEventListener("mouseenter", function(){
            document.getElementById("min_description").style.display = "inline";
            console.log("hovered over min")
        })

        MIN.addEventListener("mouseleave", function(){
            document.getElementById("min_description").style.display = "none";
        })

        // I: hover description
        I.addEventListener("mouseenter", function(){
            document.getElementById("L_description").style.display = "inline";
            console.log("hovered over I")
        })

        I.addEventListener("mouseleave", function(){
            document.getElementById("L_description").style.display = "none";
        })

        // MAX: hover description
        MAX.addEventListener("mouseenter", function(){
            document.getElementById("max_description").style.display = "inline";
            console.log("hovered over max")
        })

        MAX.addEventListener("mouseleave", function(){
            document.getElementById("max_description").style.display = "none";
        })

    });

});
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
    

        MIN.addEventListener("mouseenter", function(){
            document.getElementById("min_description").style.display = "inline";
            console.log("hovered over min")
        })

        I.addEventListener("mouseenter", function(){
            document.getElementById("L_description").style.display = "inline";
            console.log("hovered over I")
        })

        MAX.addEventListener("mouseenter", function(){
            document.getElementById("max_description").style.display = "inline";
            console.log("hovered over max")
        })

        var elements = document.getElementsByClassName("description");

        var myFunction = function(element) {
            element[i].style.display = "inline";
            console.log("exited over abbrevieation")
        };
        
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('mouseleave', myFunction);
        }

    });

});
var container = document.getElementById("container")
var min_flag, max_flag, I_flag;

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
            min_flag = true;
            console.log("hovered over min")
        })

        I.addEventListener("mouseenter", function(){
            document.getElementById("L_description").style.display = "inline";
            I_flag = true;
            console.log("hovered over I")
        })

        MAX.addEventListener("mouseenter", function(){
            document.getElementById("max_description").style.display = "inline";
            max_flag = true;
            console.log("hovered over max")
        })

        var elements = document.getElementsByClassName("description");

        var myFunction = function(element) {
            //element[i].style.display = "inline";
            if (min_flag == true){
                console.log("min_flag");
                document.getElementById("min_description").style.display = "none";
                min_flag = false;
            }
            if (I_flag == true){
                console.log("max_flag");
                document.getElementById("L_description").style.display = "none";
                I_flag = false;
            }
            if (max_flag == true){
                console.log("I_flag");
                document.getElementById("max_description").style.display = "none";
                max_flag = false;
            }
            console.log("exited over abbrevieation")
        };
        
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('mouseleave', myFunction);
        }

    });

});
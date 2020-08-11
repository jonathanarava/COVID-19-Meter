//content.js

/*
    converts "element" 
*/

const tag_word = /(coronavirus)/gi;
function replaceText(element) {  
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
        console.log(tag_word);
    } else if (element.nodeType === Text.TEXT_NODE) {
        //Coronavirus
        if (element.textContent.match(tag_word)) { //brackets not necessary
            console.log('%c Match!', 'color: green; font-weight: bold;')
            const newElement = document.createElement('span')
            newElement.innerHTML = element.textContent.replace(tag_word, '<span class="rainbow">$1</span>') //brackets necessary (output: $1)
            element.replaceWith(newElement)
        }
    }
}




chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message) {
    console.log(message)

    switch (message.status){
        case "0":
            //console.log("Less COVID")
            break;
        case "1":
            //console.log("give it to me as is")
            break;
        case "2":
            //console.log("More COVID")
            replaceText(document.body)
            break;

    }

}
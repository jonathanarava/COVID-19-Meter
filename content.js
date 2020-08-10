//content.js

/*
    converts "element" 
*/
function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        //Coronavirus
        if (element.textContent.match(/coronavirus/gi)) {
            console.log('%c Match!', 'color: green; font-weight: bold;')
            const newElement = document.createElement('span')
            newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi, '<span class="rainbow">$1</span>')
            element.replaceWith(newElement)
        }
    }
}


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message) {
    console.log(message)
    console.log(message.status)

    switch (message.status){
        case "0":
            console.log("Less COVID")
        case "1":
            console.log("give it to me as is")
        case "2":
            console.log("More COVID")
            replaceText(document.body)
        default:
            console.log(message.status)

    }

}
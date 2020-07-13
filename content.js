//content.js

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

function gotMessage(message, sender, sendResponse) {
    console.log("msg received")

    if (message !== "moreCOVID") {
        replaceText(document.body)
    }
}
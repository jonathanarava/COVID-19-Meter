/*
content.js : web page 

*/

// Keywords to identify on a web page
tag_words = [/(coronavirus)/gi, /(covid-19)/gi];


// Replaces tag_word's orginal font with rainbow font
function replaceText(element) {  
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(tag_word)) { //brackets not necessary
            //testing: console.log('%c Match!', 'color: green; font-weight: bold;')
            const newElement = document.createElement('span')
            newElement.innerHTML = element.textContent.replace(tag_word, '<span class="rainbow">$1</span>') //brackets necessary (output: $1)
            element.replaceWith(newElement)
        }
    }
}

// Converts tag_words on the current website to rainbow font
function max_corona(element, array){
    for(i=0; i< array.length; i++){ // iterates through all the tag_words
        tag_word = array[i];
        replaceText(element);   // converts original font to rainbow font
    }
}

// Removes tag_word from the website
 function removeText(element) {  
    if (element.hasChildNodes()) {
        element.childNodes.forEach(removeText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(tag_word)) { //brackets not necessary
            element.parentNode.remove();
            
        }
    }
}

// Removes tag_words from the current website
function min_corona(element, array){
    for(i=0; i< array.length; i++){
        tag_word = array[i];
        removeText(element);
    }
}



chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message) {
    console.log(message)

    switch (message.status){
        case "0":
            console.log("Less COVID")
            min_corona(document.body,tag_words)
            break;
        case "1":
            console.log("give it to me as is")
            location.reload()
            break;
        case "2":
            console.log("More COVID")
            max_corona(document.body,tag_words)
            break;

    }

}
/*
content.js : web page.

*/

// Keywords to identify on a web page.
tag_words = [/(coronavirus)/gi, /(covid-19)/gi];


// Replaces tag_word's orginal font with rainbow font.
function replaceText(element) {  
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(tag_word)) { // brackets not necessary.
            //testing: console.log('%c Match!', 'color: green; font-weight: bold;')
            const newElement = document.createElement('span')
            newElement.innerHTML = element.textContent.replace(tag_word, '<span class="rainbow">$1</span>') //brackets necessary (output: $1)
            element.replaceWith(newElement)
        }
    }
}

// Converts tag_words on the current website to rainbow font.
function max_corona(element, array){
    for(i=0; i< array.length; i++){ // iterates through all the tag_words.
        tag_word = array[i];
        replaceText(element);   // converts original font to rainbow font.
    }
}

// Removes tag_word from the website.
 function removeText(element) {  
    if (element.hasChildNodes()) {
        element.childNodes.forEach(removeText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(tag_word)) { // brackets not necessary.
            element.parentNode.remove();
            
        }
    }
}

// Removes tag_words from the current website.
function min_corona(element, array){
    for(i=0; i< array.length; i++){
        tag_word = array[i];
        removeText(element);
    }
}


// Listens for messages from 'popup.js' and if a message is received, execute 'gotMessage' function
// with received 'message'.
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message) {
    console.log(message)   

    switch (message.status){
        
        // MIN case : user wants to see minimum ammount of tag_words on current page.
        case "0":
            console.log("Less COVID")
            min_corona(document.body,tag_words) // removes tag_words from the site.
            break;

        // Neutral case : user wants to see the current page unaltered.
        case "1":
            console.log("give it to me as is")
            window.location.reload()   // refreshes the page from cache.
            // window.location.reload(): refreshes the page from the browser's cache.
            // location.reload(): refreshes the page (less efficient).
            break;

        // MAX case : user wants the tag_words to stand out on current page.
        case "2":
            console.log("More COVID")
            max_corona(document.body,tag_words) // replaces tag_words' orginal font with rainbow font
            break;

    }

}
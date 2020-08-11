//content.js

/*
    converts "element" 
*/

tag_words = [/(coronavirus)/gi, /(covid-19)/gi];



function replaceText(element) {  
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(tag_word)) { //brackets not necessary
            //console.log('%c Match!', 'color: green; font-weight: bold;')
            const newElement = document.createElement('span')
            newElement.innerHTML = element.textContent.replace(tag_word, '<span class="rainbow">$1</span>') //brackets necessary (output: $1)
            element.replaceWith(newElement)
        }
    }
}


function max_corona(element, array){
    for(i=0; i< array.length; i++){
        tag_word = array[i];
        replaceText(element);
    }
}

 function removeText(element) {  
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(tag_word)) { //brackets not necessary
            const newElement = document.createElement('span')
            newElement.innerHTML = element.textContent.replace(tag_word, '<span class="rainbow">""</span>') //brackets necessary (output: $1)
            element.replaceWith(newElement)
            
        }
    }
}
    
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
            break;
        case "2":
            console.log("More COVID")
            max_corona(document.body,tag_words)
            break;

    }

}
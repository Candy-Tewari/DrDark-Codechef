

let inputs = document.querySelectorAll('[id^="sampleinput"]');
let outputs = document.querySelectorAll('[id^="sampleoutput"]');


function styleContainer(container) {
    container.style.display = "flex";
    container.style.borderTop = "1px solid black";
    container.style.paddingTop = "10px";
}

function styleButton(button, element) {
    button.style.alignSelf = "flex-end";
    button.style.marginTop = element.paddingTop;
    button.style.backgroundColor = 'transparent';
    button.style.color = "#888";
    button.style.cursor = "poiter";
    button.style.border = "1px solid rgb(185, 185, 185)";
    button.style.padding = "3px";
    button.style.lineHeight = "1.1rem";
    button.style.font = "1.1rem";
}

function stylePrevious(element) {
    element.style.marginTop = "0px";
    element.style.paddingTop = "0px";
    element.style.marginBottom = "0px";
    element.style.border = "none"; 
    element.style.flexGrow = "1";
}

function copyToClipboard(data){
    try{
        let temporaryTextField = document.createElement('textarea');
        temporaryTextField.textContent = data;
        console.log(temporaryTextField.textContent);
        document.body.appendChild(temporaryTextField);
        temporaryTextField.select();
        document.execCommand("copy");
        document.body.removeChild(temporaryTextField);
    } catch(error){
        console.log(error);
    }
}

function addClick(button, container) {
    try{
        button.addEventListener('click', (e)=>{
            console.log("Text copied");
            const data = container.nextElementSibling.childNodes[0].innerHTML;
            copyToClipboard(data);
        });
    } catch(error){
        console.log(error);
    }
}

function addMouseOverEvent(button){
    button.onmouseover = ()=>{
        button.style.backgroundColor = "#def";
    }
    button.onmouseleave = ()=>{
        button.style.backgroundColor = "transparent";
    }
}

function createCopyButtons(array){
    array.forEach(element => {

        let container = document.createElement('div');
        let button = document.createElement('button');

        button.innerHTML = "Copy"
        
        styleContainer(container);
        styleButton(button, element);
        stylePrevious(element);

        container.innerHTML = element.outerHTML + button.outerHTML;
        
        element.parentNode.replaceChild(container, element);

        let btn = container.querySelector('button');
        addClick(btn, btn.parentNode);
        addMouseOverEvent(btn);
    });
}

createCopyButtons(inputs);
createCopyButtons(outputs);
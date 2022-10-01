let text = document.querySelector('#input-txt');
let outputDiv = document.querySelector('#output');

let translateBTN = document.querySelector('#btn-translate');

let url = "https://api.funtranslations.com/translate/dothraki.json";

function formUrl(txt){
    return `${url}?text=${txt}` ;
}


translateBTN.addEventListener("click" , () => {
     let inputText = text.value ;
     
     fetch(formUrl(inputText))
     .then(response => response.json())
     .then(json => {
       if(json.hasOwnProperty('error')){
            alert(json.error.message);
            console.warn(`get-response-code : ${json.error.code}`);
            console.warn(json.error.message)
       }
       else
        outputDiv.textContent = json.contents.translated
    })
     .catch(error => {
        alert('something went wrong see console for more info');
        console.log(error)
    }) ;
})
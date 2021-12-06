var btnTranslate = document.querySelector("#translation-btn");

var textInput = document.querySelector("#text-input");

var resetBtn = document.querySelector("#translation-btn-reset");

var outputBox = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslatorURL(input){
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! try again after some time");
}

function clickHandler() {
  var inputText = textInput.value;

  //server call for processing
       
   fetch(getTranslatorURL(inputText))
   .then(response => response.json()).then(json=>{

      var translatedText = json.contents.translated;

      outputBox.innerText = translatedText;
   }).catch(errorHandler)

};


function resetText() {

    outputBox.innerText = "";
    textInput.value="";

}





btnTranslate.addEventListener('click',clickHandler);
resetBtn.addEventListener('click',resetText);
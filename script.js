var buttonEncrypt = document.querySelector(".buttonEncrypt");
var buttonDecrypt = document.querySelector(".buttonDecrypt");
var manWithATool = document.querySelector(".manWithATool");
var classOfH3 = document.querySelector(".classOfH3");
var classOfParagraph = document.querySelector(".classOfParagraph");
var resultText = document.querySelector(".resultText");
const copyingButton = document.querySelector(".copyingButton");



buttonEncrypt.onclick = encrypt;
buttonDecrypt.onclick = decrypt;


copyingButton.addEventListener("click",copiar = () =>{
  var text = document.querySelector(".resultText").textContent;
  navigator.clipboard.writeText(text);
});



function encrypt()
{
  hiddenAll();
  var area = retrieveText();
  containUppercase(area);
  if(containUppercase(area)==true)
  {
    alert("Recuerde usar solo minúsculas y sin acentos, por favor.")
  }
  else if(containSpecialSymbols(area) == true){
    alert("Recuerde usar solo minúsculas y sin acentos, por favor." )
  }
  else{
    resultText.textContent = encryptingText(area);
  }
}

function decrypt()
{
  hiddenAll();
 var area = retrieveText();
 resultText.textContent = decryptingText(area);
}


function retrieveText()
{
    var area = document.querySelector(".area"); 
    return area.value;
    

}

function hiddenAll()
{
   manWithATool.classList.add("hiddenDisplay");
   classOfH3.classList.add("hiddenDisplay");
   classOfParagraph.classList.add("hiddenDisplay");

}



function encryptingText(message)
{
  var text = message;
  var finalText ="";
  
    
  for( var i=0; i<text.length; i++)
  {
    if(text[i]=="a")
    {
      finalText = finalText + "ai"
    }

   else if(text[i]=="e")
    {
      finalText = finalText + "enter"
    }

   else if(text[i]=="i")
    {
      finalText = finalText + "imes"
    }

   else if(text[i]=="o")
    {
      finalText = finalText + "ober"
    }
    
    else if(text[i]=="u")
    {
      finalText = finalText + "ufat"
    }

    else
    {
      finalText =  finalText + text[i];
    }
  }




  return finalText;
}

function decryptingText(message)
{
  var text = message;
  var finalText ="";
  
  for( var i=0; i<text.length; i++)
  {
    if(text[i]=="a")
    {
      finalText = finalText + "a"
      i=i+1;
    }

   else if(text[i]=="e")
    {
      finalText = finalText + "e"
      i=i+4;
    }

   else if(text[i]=="i")
    {
      finalText = finalText + "i"
      i=i+3;
    }

   else if(text[i]=="o")
    {
      finalText = finalText + "o"
      i=i+3;
    }
    
    else if(text[i]=="u")
    {
      finalText = finalText + "u"
      i=i+3;
    }

    else
    {
      finalText =  finalText + text[i];
    }
  }
  return finalText;
}


function containUppercase(str)
{
   return /[A-Z]/.test(str)
}

function containSpecialSymbols(str)
{
 const specialSymbol = /[$&+,:;=?@#|'<>.-^*()%!]/
 return specialSymbol.test(str);
}





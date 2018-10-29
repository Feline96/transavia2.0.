var filterButton = document.querySelector('.filterButton');
var filterContainer = document.querySelector('.filter-container');
// maakt twee variabelen van van de button en de container waar het filter in zit.

//console.log(test);
function openFilter(){
  // zet de active class op de container die de container omzet naar diaplay: block
    filterContainer.classList.toggle('active');

}
filterButton.addEventListener('click', openFilter);


//--------start micro-interactie liken-------


//maakt twee variabelen voor de likebutton en de img waarvan de src veranderd gaat worden
var likeButton =  document.querySelector('.like-button');
var heartImg = document.querySelector('.heart');
var feedbackLike = document.querySelector('.feedbackFavorieten');

function likeStory(){
  //met "heartImg.src" is het mogelijk de src te veranderen van heartImg
  // wat nu gebeurt op click
    heartImg.src = "icon/heart-filled.svg";
    feedbackLike.classList.add('feedback');
    setTimeout(function(){ feedbackLike.classList.remove('feedback'); }, 5000);
}


// voegt de clickfunctie likeStory toe aan de likebutton
likeButton.addEventListener("click", likeStory)




//-----------Download micro interactie-------

//--- maakt weer twee variabelen maar dan voor de download button en de download img
var downloadButton = document.querySelector('.download-button');
var downloadImg = document.querySelector('.download-icon');
var feedbackDownload = document.querySelector('.feedbackDownloaden');

function downloading() {
  // veranderd de downloading src in de laad gif
  downloadImg.src = "icon/loading.gif";
  // de setTimeout functie wordt gebruikt om een functie aan te roepen na een bepaalde tijd.
  // Hierbij is de 3000 de tijd wat gelijk staat aan 3 seconden. 2000 is dan 2 seconden etc.
  //Hierna voert hij de funtie die erin ligt uit die de src veranderd naar checked.
  setTimeout(function(){
    downloadImg.src = "icon/checked.svg";
      feedbackDownload.classList.add('feedback');
      
    setTimeout(function(){ 
        feedbackDownload.classList.remove('feedback');
    },5000);
      
}, 3000);
}

// koppeld de functie downloading aan de downloadbutton bij het klikken erop.
downloadButton.addEventListener("click", downloading) 

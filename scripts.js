/* colors for manilla
  #f0d38f

  #ffdead
  */
$(document).ready(function() {


var currentPage = 0;
var active = true;
var direction = true;

//tab on click
$(".tab").on("click", function(){
  flipHandler(translator($(this).attr('id')));
})

function flipHandler(clickedPage){
  if (active){
    var delay;
    //if the pages arent the same, run code
    if (clickedPage != currentPage){
      active = false;
      if (currentPage > clickedPage){
        direction = false;
        delay = currentPage - clickedPage;
      }
      else{
        direction = true;
        delay =  clickedPage - currentPage;
      }
      setTimeout(function(){
        active = true;
      }, (delay * 520));
      flipLogic(currentPage, clickedPage);
    }
  }
}




//main flip logic

function flipLogic(i, end){
  if (i != end){

    if (direction){
      $("#" + translator(i+1)).toggleClass("hidden")
      $("#" + translator(i)).toggleClass("flip");
      setTimeout(function(){
        $("#" + translator(i)).toggleClass("hidden onTop");
        $("#" + translator(i+1)).toggleClass("onTop")
        flipLogic(i+1, end)
      }, 520);
    }
    else{
      $("#" + translator(i)).toggleClass("onTop")
      $("#" + translator(i-1)).toggleClass("onTop");
      $("#" + translator(i-1)).toggleClass("hidden")

      setTimeout(function(){
        $("#" + translator(i-1)).toggleClass("flip");
      }, 20);


      setTimeout(function(){

        $("#" + translator(i)).toggleClass("hidden");
        flipLogic(i-1, end)
      }, 520);
    }
  }
  else currentPage = i;
}
/*
$("#homeHeader").on("click", function(){
  $("#home").toggleClass("flip");
  setTimeout(function(){
    flipHelper("folderCover", "about");
  }, 600);

})
*/

//translates
function translator(word){
  switch(word){
    case "homeHeader":
      return 0;
      break;
    case "aboutHeader":
      return 1;
      break;
    case "galleryHeader":
      return 2;
      break;
    case "contactHeader":
      return 3;
      break;
    case 0:
      return "home";
      break;
    case 1:
      return "about";
      break;
    case 2:
      return "gallery";
      break;
    case 3:
      return "contact";
      break;
  }
}


$("#sendButton").on("click", function(){
  $("#thanks").css("display", "block");

  setTimeout(function(){
    location.href = location.href;
  }, 1000);
})



function wheelHandler(evt){
  if(evt.deltaY >= 0 && currentPage!=3){
    flipHandler(currentPage+1);
  }
  else if(evt.deltaY < 0 && currentPage!=0){
    flipHandler(currentPage-1);
  }

}

var port = document.getElementById("portfolio");
port.addEventListener('wheel', wheelHandler, false);



  });

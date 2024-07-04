/*var simon = document.getElementById("simon");
var simonPic = document.getElementById("simon-pic");
simon.addEventListener("click", function(){
  if (simonPic.className === "hide"){
    simonPic.className = "";
  }
  else{
    simonPic.className="hide";
  }
});
*/
//do same for bruce nd ben too -> function
//var simon = document.getElementById("simon");
var simon = document.getElementById("simon");
var bruce = document.getElementById("bruce");
var ben = document.getElementById("ben");

simon.addEventListener("click", picLink);
bruce.addEventListener("click", picLink);
ben.addEventListener("click", picLink);

function picLink(){
    var allimages = document.querySelectorAll("img");

    for(var i=0; i<allimages.length; i++){
      allimages[i].className="hide";
  }
    var picId = this.attributes["data-img"].value;
    var pic = document.getElementById(picId);
    if (pic.className =="hide"){
        pic.className="";
    }
    else{
        pic.className="hide";
    }
}
function copyToClip(name) {
  if (name == undefined || name == '') {
   	var copyText = document.getElementById("js-copyInput");
  	copyText.select();
  	document.execCommand("Copy"); 	
  } else {
  	var copyText = document.getElementById(name);
  	copyText.select();
  	document.execCommand("Copy"); 	
  }

}

// function preloader(){
//     document.getElementById("loading").style.display = "none";
//     document.getElementById("content").style.display = "block";
// }//preloader
// window.onload = preloader;

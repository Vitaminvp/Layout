
//function onclick(e){
// 
//    var printBlock = document.getElementById("printBlock");
//    var val = e.target.value;
//    printBlock.textContent = "Вы выбрали: " + val;
//}
//for (var i = 0; i < myForm.val.length; i++) {
//    myForm.val[i].addEventListener("click", onclick);
//}


//    var btn = document.getElementsByClassName('bulb');
//    console.log(btn);
//	for (var i = 0; i < btn.length; i++) {
//		btn[i].addEventListener("click", onclick);
//	}
//
//
// 
//    function onclick(e) {
//      e.target.classList.toggle('active');
//    };



//function onclick(e){
// 
//    var printBlock = document.getElementById("printBlock");
//    var language = e.target.value;
//    printBlock.textContent = "Вы выбрали: " + language;
//}
//for (var i = 0; i < myForm.languages.length; i++) {
//    myForm.languages[i].addEventListener("click", onclick);
//}
//
//var all = document.getElementById("all");
//
//
//
//function setBg(el) {
//	alert("ok");
//    el.classList.toggle("active");
//
//}
//
//var btn = document.getElementsByClassName('bulb');
//
//for (var i=0; i<btn.length; i++) {
//  btn[i].addEventListener("click", setBg);
//  };


//
//var el = document.getElementsByClassName('bulb');
//   console.log(el);
//for(let i=0; i < el.length; i++) {
//   el[i].addEventListener("click", showSub);
//}
//
//function showSub(e) {
//      this.classList.toggle('active');
//}

var el = document.getElementsByClassName('bulb');
console.log(el);
console.log(el.length);

for(var i=0; i<el.length; i++) {
   el[i].addEventListener("click", showSub, false);
	
}
function showSub(e) {
	  
      e.target.classList.add('active');

}





 

 

 

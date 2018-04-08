
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
// function classToggle(e) {
//    e.target.classList.toggle('active');
//}
//var btn = document.getElementsByClassName('bulb');
//for (var i = 0; i < btn.length; i++) {
//    btn[i].classList.addClass('active');
////    btn[i].addEventListener('click', classToggle);
//}
//function classToggle() {
//    this.classList.toggle('class1');
//}
//document.querySelector('#div').addEventListener('click', classToggle);
window.onload = function(){
    var btn = document.getElementsByClassName('bulb');

    document.querySelector('#all').addEventListener('click', classToggleAll);

    for (let i=0; i<btn.length; i++) {
      btn[i].addEventListener("click", classToggle);
      };

    function classToggle() {
        this.closest('.wrap').classList.toggle('active');
    }

    function classToggleAll() {
        if(this.closest('.wrap').classList.contains('active')){
            this.closest('.wrap').classList.remove('active');
            for(let i=0; i<btn.length; i++ ){
                if( btn[i].closest('.wrap').classList.contains('active')) btn[i].closest('.wrap').classList.remove('active');
            }
            
        }else{
            this.closest('.wrap').classList.add('active');
            for(let i=0; i<btn.length; i++ ){
                if( !btn[i].closest('.wrap').classList.contains('active')) btn[i].closest('.wrap').classList.add('active');
            }
        }
    }
}



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








 
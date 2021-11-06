AOS.init();


var y = document.querySelector('.hamburger');
y.addEventListener('click', foo);


function foo() {
  let x = document.querySelectorAll('.navigation ul li');
    for (i = 0; i < x.length; i++) {
      if (x[i].style.display != "flex"){
        x[i].style.display = "flex";  
      } else {
        x[i].style.display = "none";
      }
      
    }
}

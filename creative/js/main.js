const menu = document.getElementById('menu')
var isMenuOpen = false;

menu.style.height= 0
menu.style.opacity= '0' 

const menuToogle = () =>{
    if (isMenuOpen=== true){
        menu.style.opacity= '0'
        menu.style.height= 0       
        isMenuOpen = false
    }
    else{
        menu.style.opacity= '1' 
        menu.style.height= '55vh'
        isMenuOpen = true
    }
}


// chage nav color on scroll

var navbar = document.querySelector('nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 200) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }

//   if (window.pageYOffset > 300) {
//     document.getElementById("myDIV").classList.add('none')
// } else {
//     document.getElementById("myDIV").classList.remove('none')
//   }
}
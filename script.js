const hamburgerMenuBtn = document.getElementById('hamburger-menu')
const mobileMenu = document.getElementById('mobile-menu')
const formBtn = document.getElementById('formBtn')

function toggleHamburgerMenu(e) {
  e.preventDefault()
  if (mobileMenu.classList.contains('hide')) {
    return mobileMenu.classList.remove('hide')
  }
  if (!mobileMenu.classList.contains('hide')) {
    return mobileMenu.classList.add('hide');
    
  }
}

hamburgerMenuBtn.addEventListener("click", toggleHamburgerMenu)
formBtn.addEventListener('click', ()=> alert('Thank you for messaging! I have received your email'))
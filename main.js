// const current = document.querySelector('#current')
// const imgs = document.querySelectorAll('.images img')
//**destructuring**//
const [current, imgs] = [
  document.querySelector("#current"),
  document.querySelectorAll(".images img")
]
const opacity = 0.4
//set 1st img opacity
imgs[0].style.opacity = opacity

imgs.forEach(img => img.addEventListener('click', imgClick))

function imgClick(e) {
    //reset opacity of all imgs
    imgs.forEach(img => (img.style.opacity = 1))
    
    //change surrent image to src of clicked image
    current.src = e.target.src
    
    //add .fade-in class
    current.classList.add('fade-in')
    
    //remove .fade-in class after .5s
    setTimeout(() => current.classList.remove('fade-in'), 500)
    
    //change opacity to opacity var
    e.target.style.opacity = opacity
}
            

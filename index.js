// let imgDOM = document.querySelector('#header_img');
// let headerDOM = document.querySelector('header');
// let coverDOM = document.querySelector('.navigation--heroimage__cover');
let burger = document.querySelector('.navigation--bar--menu--burger');
let collapseMenu = document.querySelector('.navigation--bar--menu');

burger.addEventListener('click', function(){
  collapseMenu.style.display = collapseMenu.style.display === "flex" ? "none" : "flex";
  ["fill","color"].map(item => {
    this.parentNode.style[item] = this.parentNode.style[item] === "black" ? "white" : "black";
  })
  this.parentNode.style.position = this.parentNode.style.position === "fixed" ? "absolute" : "fixed"
})


window.onresize = function(){
  collapseMenu.style.display = window.innerWidth >= 768 ? "flex" : "none"
}

// window.onload = function(){
//   console.log(window.of)
//   coverDOM.style.height = `${window.innerHeight < imgDOM.height ? window.innerHeight : imgDOM.height}px`;
//   headerDOM.style.height = `${window.innerHeight < imgDOM.height ? window.innerHeight : imgDOM.height}px`;
// }

// window.onresize = function(){
//   coverDOM.style.height = `${window.innerHeight < imgDOM.height ? window.innerHeight : imgDOM.height}px`;
//   headerDOM.style.height = `${window.innerHeight < imgDOM.height ? window.innerHeight : imgDOM.height}px`;
//   console.log(headerDOM.style.height);
// }
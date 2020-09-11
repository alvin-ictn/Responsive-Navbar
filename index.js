let imgDOM = document.querySelector('#header_img');
let headerDOM = document.querySelector('header');
let coverDOM = document.querySelector('.navigation--heroimage__cover');

window.onload = function(){
  console.log(window.of)
  coverDOM.style.height = `${window.innerHeight < imgDOM.height ? window.innerHeight : imgDOM.height}px`;
  headerDOM.style.height = `${window.innerHeight < imgDOM.height ? window.innerHeight : imgDOM.height}px`;
}

window.onresize = function(){
  coverDOM.style.height = `${window.innerHeight < imgDOM.height ? window.innerHeight : imgDOM.height}px`;
  headerDOM.style.height = `${window.innerHeight < imgDOM.height ? window.innerHeight : imgDOM.height}px`;
  console.log(headerDOM.style.height);
}
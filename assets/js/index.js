let burger = document.querySelector('.navigation--bar--menu--burger');
let collapseMenu = document.querySelector('.navigation--bar--menu');

burger.addEventListener('click', function () {
	collapseMenu.style.display = collapseMenu.style.display === "flex" ? "none" : "flex";
	["fill", "color"].map(item => {
		this.parentNode.style[item] = this.parentNode.style[item] === "black" ? "white" : "black";
	})
	this.parentNode.style.position = this.parentNode.style.position === "fixed" ? "absolute" : "fixed"
})


window.onresize = function () {
	collapseMenu.style.display = window.innerWidth >= 768 ? "flex" : "none"
}
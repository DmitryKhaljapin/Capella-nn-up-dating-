"use strict"

let up_scroll = document.querySelector(".up-scroll");

function scroll_up_the_page(event) {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"
	});
}

up_scroll.addEventListener('click', scroll_up_the_page)
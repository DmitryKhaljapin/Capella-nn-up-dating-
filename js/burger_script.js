"use strict"

let burger_body = document.querySelector('.burger-body');
let burger_menu = document.querySelector('.burger-menu');
let burger_menu_text = document.querySelector('.burger-menu p');
let sub_menues = document.querySelectorAll('.main-sub-menu');

function get_burger(event) {
	burger_body.classList.toggle('active');
	burger_menu.classList.toggle('opened');
	document.querySelector('body').classList.toggle('lock');
	if (burger_body.classList.contains('active')) {
		burger_menu_text.innerHTML = "закрыть";
	}
	else {
		burger_menu_text.innerHTML = "меню";
	}
	let selected_menu_items = document.querySelectorAll('.selected');     //reset styles
	for (let item of selected_menu_items) {
		item.classList.remove('selected');
	}
	for (let item of sub_menues) {
		item.classList.remove('opened');
	}
}

function select_menu_item(event) {
	let selected_menu_items = document.querySelectorAll('.selected');
	for (let item of selected_menu_items) {
		item.classList.remove('selected');
	}
	event.target.classList.add('selected');
	for (let item of sub_menues) {
		item.classList.remove('opened');
	}
	let sub_menu = event.target.nextElementSibling;
	if (sub_menu != null) {
		sub_menu.classList.add('opened');
	}
}

function hide_burger_icon(evetn) {
	if (burger_menu.classList.contains('opened') && burger_body.scrollTop > 50) {
		burger_menu.classList.add('hidden');
	}
	else {
		burger_menu.classList.remove('hidden');
	}
}

document.querySelector('.burger-menu').addEventListener('click', get_burger);
let menu_items = document.querySelectorAll('.main-navigation-item');
for (let item of menu_items) {
	item.addEventListener('click', select_menu_item);
}
burger_body.addEventListener('scroll', hide_burger_icon);

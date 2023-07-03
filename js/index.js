'use strict';

// Youtube video optimization
const youtubeEl = document.querySelector('.youtube');
const image = new Image();
const embed = youtubeEl.dataset.embed;
image.src = `https://img.youtube.com/vi/${embed}/sddefault.jpg`;
image.addEventListener('load', () => youtubeEl.appendChild(image));

youtubeEl.addEventListener('click', function () {
	const frame = document.createElement('iframe');
	frame.setAttribute('frameborder', '0');
	frame.setAttribute('allowfullscreen', '');
	frame.setAttribute(
		'src',
		`https://www.youtube.com/embed/${embed}?autoplay=1&mute=1`,
	);
	this.innerHTML = '';
	this.appendChild(frame);
});

// Animation
const animationElements = document.querySelectorAll('.animation');
if (animationElements.length > 0) {
	const animate = () => {
		for (let i = 0; i < animationElements.length; i++) {
			const element = animationElements[i];
			const offsetHeight = element.offsetHeight;
			const topSetHeight = element.getBoundingClientRect().top + window.scrollY;
			let totalHeight = window.innerHeight - offsetHeight / 4;
			if (offsetHeight > window.innerHeight) {
				totalHeight = window.innerHeight - window.innerHeight / 4;
			}
			if (
				scrollY > topSetHeight - totalHeight &&
				scrollY < topSetHeight + offsetHeight
			) {
				element.classList.add('active');
			}
		}
	};
	window.addEventListener('scroll', animate);
	setTimeout(animate, 300);
}

// Menu burger
const menuIcon = document.querySelector('.menu__icon');
const menuList = document.querySelector('.menu__list');
const menuLink = document.querySelectorAll('.menu__link');

menuIcon.addEventListener('click', () => {
	document.body.classList.toggle('lock');
	menuIcon.classList.toggle('active');
	menuList.classList.toggle('active');
});

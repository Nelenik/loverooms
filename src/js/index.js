// burger-menu
const burgerMenu = document.querySelector('.js-menu');
const burgerBtn = document.querySelector('.js-burger');
const page = document.body;

function openMenu() {
	burgerMenu.classList.add('js-menu--open');
	burgerBtn.classList.add('burger--open');
	const mediaQuery = window.matchMedia('(max-width: 992px)');
	if (mediaQuery.matches) {
		page.classList.add('stop-scroll');
	}
}
function closeMenu() {
	burgerMenu.classList.remove('js-menu--open');
	burgerBtn.classList.remove('burger--open');
	page.classList.remove('stop-scroll');
}

burgerMenu.addEventListener('click', (e) => {
	e._isClickedMenu = true;
});

document.addEventListener('click', (e) => {
	if (e.target.closest('.js-burger')) {
		burgerBtn.classList.contains('burger--open') ? closeMenu() : openMenu();
	}

	if (
		(!e._isClickedMenu && e.target !== burgerBtn) ||
		e.target.closest('.menu__link')
	) {
		closeMenu();
	}
});
document.addEventListener('keydown', (e) => {
	if (e.code === 'Escape') closeMenu();
});

// animation

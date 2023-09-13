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

// contacts
class Spoiler {
	static openedEl;

	constructor(list) {
		this.list = list;
		this.btn = this.list.querySelector('.spoiler__trigger');
		this.content = this.list.lastElementChild;
		this.hideStr = `height: 0; visibility: hidden`;
		this.showStr = `height: ${this.content.offsetHeight}px; visibility: visible`;
		this.isOpened = false;

		this.btn.addEventListener('click', () => {
			if (Spoiler.openedEl && Spoiler.openedEl !== this)
				Spoiler.openedEl.isOpened = false;
			Spoiler.openedEl = this;
			this.isOpened = !this.isOpened;
		});
	}

	set isOpened(value) {
		this._isOpened = value;
		if (value) {
			this.list.classList.add('opened');
			this.content.style.cssText = this.showStr;
		} else {
			this.list.classList.remove('opened');
			this.content.style.cssText = this.hideStr;
		}
	}

	get isOpened() {
		return this._isOpened;
	}
}

const spoiler = document.querySelector('.spoiler');
new Spoiler(spoiler);

// animation

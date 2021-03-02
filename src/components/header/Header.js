import {headerStorage} from '../../storage/storage'
import {headerTemplate} from './header.template'

export class Header  {
	constructor() {
		this.headerRoot = document.querySelector('#Header')
		this.header = null
		this.headerStateRegulation = null
		this.headerMenu = null
		this.init()
	}

	init() {
		this.toHTML()
		this.eventInitial()
		this.afterInitComponent()
	}

	eventInitial() {
		this.headerRoot.addEventListener('click', (e) => this.onClick(e))
		this.headerRoot.addEventListener('input', (e) => this.onInput(e))
		this.headerRoot.addEventListener('mouseover', (e) => this.onMouseover(e))
	}
	toHTML() {
		this.headerRoot.innerHTML =  headerTemplate()
	}

	afterInitComponent() {
		this.header = headerStorage.headerFunctions()
		this.headerMenu = headerStorage.headerMenu()

		this.headerStateRegulation = headerStorage.headerStateRegulation()

		this.headerMenu.menuClose()
	}

	onClick(e) {
		if(e.target.closest('article')) {
			const element = e.target.closest('article');

			switch (element.id) {
				case 'burger-menu':
					console.log(this.headerStateRegulation)
					this.headerStateRegulation.init('menuOpen')
					break;
				case 'mobile-search-button-js':
					this.headerStateRegulation.init('mobileSearchOpen')
					break;
				case 'desktop-search-js':
					this.header.desktopSearchActive(element)
					break;
				case 'icon-info-button-js':
					this.headerStateRegulation.init('infoOpen')
					break;
				case 'registry-user-mobile-button-js':
					this.headerStateRegulation.init('showRegistry')
					break;
			}
		}
	}

	onInput(e) {
		if(e.target.closest('article')) {
			const element = e.target.closest('article');

			switch (element.id) {
				case 'desktop-search-js':
					this.header.desktopSearchInputActive(e)
					break;
				case 'mobile-search-js':
					this.header.mobileSearchInput(e)
					break;
			}
		}
	}

	onMouseover(e) {
		const extraMenu = headerStorage.extraMenuShow()
		extraMenu.init(e)
	}

}
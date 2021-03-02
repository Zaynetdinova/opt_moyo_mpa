import {footerTemplate} from './Footer.template'

export class Footer {
	constructor() {
		this.footer = document.querySelector('#footer')
		this.init()
	}

	init() {
		this.footer.innerHTML = footerTemplate()
		this.toHTML()
		this.afterTemplateInitial()
	}

	toHTML() {
		return footerTemplate()
	}

	afterTemplateInitial() {
		console.log('super')
	}
}
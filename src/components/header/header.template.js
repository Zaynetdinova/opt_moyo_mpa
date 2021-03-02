import {topHeader} from './view/topHeader'
import {bottomHeader} from './view/bottomHeader/bottomHeader'
import {sidebarWrapper} from "./view/sidebar/sidebarWrapper";



export function headerTemplate() {
	return `
       ${topHeader()}
       ${bottomHeader()}
       ${sidebarWrapper()}
       `
}
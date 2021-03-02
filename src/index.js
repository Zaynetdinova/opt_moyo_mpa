import './assets/webpack.png'
import './styles/index.scss'
import {Footer} from './components/footer/Footer'
import {Header} from './components/header/Header'
import {OpenSidebar} from './utils/openSidebar'

window.userRegistry = true

new Footer()
new Header()
new OpenSidebar()


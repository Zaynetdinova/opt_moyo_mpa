import user_white from '../../../assets/images/icons/user-white.svg'
import favorites from '../../../assets/images/icons/favorites.svg'
import sale_icon from '../../../assets/images/icons/sale-icon.svg'
import history from '../../../assets/images/icons/history.svg'
import exit_white from '../../../assets/images/icons/exit-white.svg'

export function showRegistryUserDataView() {
	return `
    <div class="Show-registry-user-data-view">
        <div class="box">
            <img class="icon" src=${user_white} alt="user_white">
            <div class="text">Личные данные</div>
        </div>
        <div class="box">
            <img class="icon" src=${history} alt="history">
            <div class="text">История заказов</div>
        </div>
        <div class="box">
            <img class="icon" src=${sale_icon} alt="sale_icon">
            <div class="text">Скидки <br> и бонусы</div>
        </div>
        <div class="box">
            <img class="icon" src=${favorites} alt="favorites">
            <div class="text">Избранное</div>
        </div>
        <div class="box">
            <img class="icon" src=${exit_white} alt="exit_white">
            <div class="text">Выход</div>
        </div>
    </div>
  `
}

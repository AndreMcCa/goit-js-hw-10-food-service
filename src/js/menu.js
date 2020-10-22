import menu from '../json/menu.json'
import createItemsMenu from '../templates/card.hbs';

const menuItemsEl = document.querySelector('.js-menu');
const itemMarkup = createMenu(menu);

menuItemsEl.insertAdjacentHTML('beforeend', itemMarkup)

function createMenu(menu) {
    return createItemsMenu(menu);
}
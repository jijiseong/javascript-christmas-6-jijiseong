class Restaurant {
  #menus;

  constructor(menus) {
    this.#menus = menus;
  }

  hasMenu(name) {
    const menuNames = Object.keys(this.#menus);
    return menuNames.includes(name);
  }
}

export default Restaurant;

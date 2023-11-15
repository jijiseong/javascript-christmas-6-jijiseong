class Restaurant {
  #menus;

  constructor(menus) {
    this.#menus = menus;
  }

  hasMenu(name) {
    const menuNames = Object.keys(this.#menus);
    return menuNames.includes(name);
  }

  calculateTotalPrice(menus) {
    let totalPrice = 0;
    Object.entries(menus).forEach(([name, amount]) => {
      const price = this.#menus[name];
      totalPrice += price * Number(amount);
    });

    return totalPrice;
  }
}

export default Restaurant;

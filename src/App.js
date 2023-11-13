import callWithErrorHandler from './utils/callWithErrorHandler';
import GameController from './modules/Models/GameController';

class App {
  #gameController = new GameController();

  async run() {
    const { date, menus } = await this.#inputFromUser();
    this.#printInfo({ date, menus });
    this.#printEventDiscounts({ date, menus });
  }

  async #inputFromUser() {
    const date = await callWithErrorHandler(
      this.#gameController.takeDate,
      this.#gameController,
    );
    const menus = await callWithErrorHandler(
      this.#gameController.takeOrder,
      this.#gameController,
    );

    return { date, menus };
  }

  #printInfo({ date, menus }) {
    this.#gameController.printEventGuide(date);
    this.#gameController.printOrderMenu(menus);
    this.#gameController.printTotalPrice(menus);
    this.#gameController.printGiveaway(menus);
  }

  #printEventDiscounts({ date, menus }) {
    const discounts = this.#gameController.calculateEventDiscounts({
      date,
      menus,
    });
    this.#gameController.printEventDiscounts(discounts);
  }
}

export default App;

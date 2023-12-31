import GameController from './Models/GameController';
import OutputView from './Views/OutputView';
import InputView from './Views/InputView';

class App {
  #inputView = InputView;

  #outputView = OutputView;

  #gameController = new GameController();

  async run() {
    const { date, menus } = await this.#gameController.askDateAndMenus(
      this.#inputView,
    );
    this.#gameController.printOrderInfo(date, menus, this.#outputView);
    this.#gameController.printGiveaway(menus, this.#outputView);
    this.#gameController.printEventInfo(date, menus, this.#outputView);
    this.#gameController.printTotalEventDiscount(date, menus, this.#outputView);
    this.#gameController.printDiscountedTotalPrice(
      date,
      menus,
      this.#outputView,
    );
    this.#gameController.printBadge(date, menus, this.#outputView);
  }
}

export default App;

import callWithErrorHandler from './utils/callWithErrorHandler';
import GameController from './modules/Models/GameController';

class App {
  #gameController = new GameController();

  async run() {
    const date = await callWithErrorHandler(
      this.#gameController.takeDate,
      this.#gameController,
    );
    const menus = await callWithErrorHandler(
      this.#gameController.takeOrder,
      this.#gameController,
    );
    this.#gameController.print({ date, menus });
  }
}

export default App;

import GameController from './modules/Models/GameController';
import handleError from './utils/handleError';

class App {
  #gameController = new GameController();

  async run() {
    await handleError(this.#gameController.takeDate, this.#gameController);
    await handleError(this.#gameController.takeOrder, this.#gameController);
  }
}

export default App;

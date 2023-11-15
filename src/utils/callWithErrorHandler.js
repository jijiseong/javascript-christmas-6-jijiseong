import OutputView from '../Views/OutputView';

async function callWithErrorHandler(fn, context) {
  try {
    return await fn.call(context);
  } catch (error) {
    OutputView.printLine(error.message);
    return callWithErrorHandler(fn, context);
  }
}

export default callWithErrorHandler;

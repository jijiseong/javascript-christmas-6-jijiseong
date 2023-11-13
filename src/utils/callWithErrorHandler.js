import OutputView from '../modules/Views/OutputView';

async function callWithErrorHandler(fn, context) {
  try {
    return await fn.call(context);
  } catch (error) {
    OutputView.print(error.message);
    return callWithErrorHandler(fn, context);
  }
}

export default callWithErrorHandler;

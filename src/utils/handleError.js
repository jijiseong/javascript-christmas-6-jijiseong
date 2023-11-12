import OutputView from '../modules/Views/OutputView';

async function handleError(fn, context) {
  try {
    return await fn.call(context);
  } catch (error) {
    OutputView.print(error.message);
    return handleError(fn, context);
  }
}

export default handleError;

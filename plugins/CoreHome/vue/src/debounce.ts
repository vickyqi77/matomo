interface Callable {
  (...args: unknown[]): unknown;
}

const DEFAULT_DEBOUNCE_DELAY = 300;

export default function debounce<F extends Callable>(fn: F, delayInMs = DEFAULT_DEBOUNCE_DELAY): F {
  let timeout: ReturnType<typeof setTimeout>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: Parameters<F>) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      fn(...args);
    }, delayInMs);
  };
}
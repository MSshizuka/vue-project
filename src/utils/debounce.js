export default function debounce(fn, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, ...args)
    }, delay)
  }
}
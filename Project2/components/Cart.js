export function Cart(initial = 0) {
  let count = initial;
  const subscribers = [];

  function notify() {
    subscribers.forEach((fn) => fn(count));
  }

  return {
    add() { count += 1; notify(); },
    getCount() { return count; },
    subscribe(fn) { subscribers.push(fn); }
  };
}

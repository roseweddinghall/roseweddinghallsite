type Callback = () => void;

const MAX_CONCURRENT = 8; // Daha hızlı yükleme için artırıldı
let activeCount = 0;
const queue: Callback[] = [];

export function acquireImageSlot(callback: Callback): () => void {
  let released = false;

  const start = () => {
    if (released) {
      return;
    }

    activeCount += 1;
    callback();
  };

  if (activeCount < MAX_CONCURRENT) {
    start();
  } else {
    queue.push(start);
  }

  return () => {
    if (released) {
      return;
    }

    released = true;

    if (activeCount > 0) {
      activeCount -= 1;
    }

    const next = queue.shift();
    if (next) {
      next();
    }
  };
}

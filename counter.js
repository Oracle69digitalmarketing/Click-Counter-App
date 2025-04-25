export const MAX_LIMIT = 10;

export const playSound = (type) => {
  const soundMap = {
    increase: '/sounds/increase.mp3',
    decrease: '/sounds/decrease.mp3',
    reset: '/sounds/reset.mp3',
  };

  const src = soundMap[type];
  if (!src) return;

  const audio = new Audio(src);
  audio.play();
};

export const increaseCount = (count, limit = MAX_LIMIT) => {
  if (count < limit) return count + 1;
  return count;
};

export const decreaseCount = (count) => {
  if (count > 0) return count - 1;
  return count;
};

export const resetCount = () => 0;
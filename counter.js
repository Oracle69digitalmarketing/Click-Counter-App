// shared/counter.js
export const MAX = 10;
export const MIN = 0;

export const getInitialCount = () => {
  const saved = localStorage.getItem("click-counter");
  return saved ? parseInt(saved) : 0;
};

export const saveCount = (count) => {
  localStorage.setItem("click-counter", count);
};

export const playSound = (type, enabled) => {
  if (!enabled) return;
  const src = {
    increase: "/sounds/increase.mp3",
    decrease: "/sounds/decrease.mp3",
    reset: "/sounds/reset.mp3",
  }[type];
  new Audio(src).play();
};
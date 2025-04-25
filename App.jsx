import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sounds = {
  increase: "/sounds/increase.mp3",
  decrease: "/sounds/decrease.mp3",
  reset: "/sounds/reset.mp3",
};

const MAX = 10;
const MIN = 0;

export default function ClickCounterApp() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("click-counter");
    return saved ? parseInt(saved) : 0;
  });

  const [sound, setSound] = useState(true);

  const updateCount = (newCount, action) => {
    setCount(newCount);
    localStorage.setItem("click-counter", newCount);
    if (sound) {
      new Audio(sounds[action]).play();
    }
  };

  const increase = () => {
    if (count < MAX) updateCount(count + 1, "increase");
  };

  const decrease = () => {
    if (count > MIN) updateCount(count - 1, "decrease");
  };

  const reset = () => updateCount(0, "reset");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Click Counter App</h1>

      <AnimatePresence mode="wait">
        <motion.div
          key={count}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-6xl font-semibold text-blue-700 mb-4"
        >
          {count}
        </motion.div>
      </AnimatePresence>

      {count === MAX && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-red-600 mb-4 font-medium"
        >
          You've reached the limit!
        </motion.p>
      )}

      <div className="flex gap-4 mb-4">
        <button
          onClick={increase}
          disabled={count === MAX}
          className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition-transform transform hover:scale-105 disabled:opacity-50"
        >
          Increase
        </button>
        <button
          onClick={decrease}
          disabled={count === MIN}
          className="bg-red-500 text-white px-6 py-2 rounded-xl hover:bg-red-600 transition-transform transform hover:scale-105 disabled:opacity-50"
        >
          Decrease
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 text-white px-6 py-2 rounded-xl hover:bg-gray-600 transition-transform transform hover:scale-105"
        >
          Reset
        </button>
      </div>

      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={sound} onChange={() => setSound(!sound)} />
        Sound {sound ? "On" : "Off"}
      </label>
    </div>
  );
}